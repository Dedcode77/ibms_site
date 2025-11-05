import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Formations", path: "/formations" },
    { name: "Services", path: "/services" },
    { name: "Équipe", path: "/team" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-white/80 backdrop-blur-md shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative z-50"
            >
              <div className="relative">
                <img
                  src="/src/assets/pp-removebg-preview.png"
                  alt="IBMS"
                  className={`transition-all duration-300 rounded-lg ${
                    isScrolled ? "w-15 h-10" : "w-16 h-12"
                  } group-hover:scale-110`}
                />
                {/* Glow effect on logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </div>

              {/* <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 group-hover:bg-clip-text transition-all">
                  IBMS
                </h1>
                <p className="text-xs text-gray-500 font-semibold">
                  Formation & Services
                </p>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                    isActive(link.path)
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-700 hover:text-gray-100 hover:bg-blue-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{link.icon}</span>
                    <span>{link.name}</span>
                  </span>

                  {/* Active indicator */}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full"></span>
                  )}

                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-primary-600 to-cyan-600 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Contact</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors z-50"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-40 lg:hidden shadow-2xl transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src="/public/ibms_logo.png"
              alt="IBMS"
              className="w-12 h-10 rounded-lg"
            />
            <div>
              <h2 className="text-lg font-heading font-black bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                IBMS
              </h2>
              <p className="text-xs text-gray-500 font-semibold">
                Formation & Services
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <nav className="p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isActive(link.path)
                  ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                animation: isMobileMenuOpen
                  ? `slideInRight 0.4s ease-out ${index * 0.1}s forwards`
                  : "none",
                opacity: 0,
              }}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{link.icon}</span>
                <span>{link.name}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 space-y-3">
          <Link
            to="/contact"
            className="block w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            📧 Nous contacter
          </Link>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {[
              { icon: "📘", label: "Facebook", color: "hover:text-blue-600" },
              { icon: "📷", label: "Instagram", color: "hover:text-pink-600" },
              { icon: "💼", label: "LinkedIn", color: "hover:text-blue-700" },
            ].map((social) => (
              <button
                key={social.label}
                className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl transition-all hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div
        className={`${
          isScrolled ? "h-16" : "h-20"
        } transition-all duration-500`}
      ></div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
