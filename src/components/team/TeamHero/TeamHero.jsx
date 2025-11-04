// ========================================
// TeamHero.jsx - Version Améliorée
// ========================================

import React, { useEffect, useState } from "react";

const TeamHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* === Animated background with parallax === */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[35rem] h-[35rem] bg-blue-600/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[35rem] h-[35rem] bg-cyan-600/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div className="absolute w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow delay-2000"></div>
        <div className="absolute w-[28rem] h-[28rem] bg-violet-600/15 rounded-full blur-3xl top-1/4 right-1/4 animate-pulse-slow delay-1500"></div>
        <div className="absolute w-[25rem] h-[25rem] bg-pink-600/10 rounded-full blur-3xl bottom-1/4 left-1/3 animate-pulse-slow delay-2500"></div>
      </div>

      {/* Grid overlay with animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-move"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge avec animation */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-full border border-cyan-400/30 mb-8 animate-fade-in shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            🚀 Nous recrutons des talents exceptionnels
          </span>
        </div>

        {/* Heading avec effet 3D */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 animate-fade-in-up leading-tight">
          <span className="block mb-2">Rencontrez</span>
          <span className="block relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
              Notre Équipe
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent blur-xl opacity-50 animate-gradient">
              Notre Équipe
            </span>
          </span>
        </h1>

        {/* Subtitle améliorée */}
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-[200ms]">
          Une équipe{" "}
          <span className="text-cyan-400 font-semibold">multidisciplinaire</span> animée
          par la passion de l'
          <span className="text-blue-400 font-semibold">innovation</span>, la{" "}
          <span className="text-indigo-400 font-semibold">créativité</span> et l'excellence
          technologique.
        </p>

        {/* Stats avec icônes et animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up delay-[400ms]">
          {[
            { value: "50+", label: "Experts", icon: "👥", color: "from-cyan-500 to-blue-500" },
            { value: "15+", label: "Pays", icon: "🌍", color: "from-blue-500 to-indigo-500" },
            { value: "98%", label: "Satisfaction", icon: "⭐", color: "from-indigo-500 to-purple-500" },
            { value: "24/7", label: "Support", icon: "💬", color: "from-purple-500 to-pink-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
              <div className="relative">
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons améliorés */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-[600ms]">
          <button
            onClick={() => {
              const section = document.querySelector("#team-grid");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Découvrir l'équipe</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              <span>Nous rejoindre</span>
              <span className="group-hover:rotate-12 transition-transform">✨</span>
            </span>
          </button>
        </div>

        {/* Scroll indicator animé */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce-slow">
            <span className="text-white/50 text-sm font-medium">Scroll</span>
            <svg
              className="w-6 h-6 text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* === Animations & Custom Styles === */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }
        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-2500 {
          animation-delay: 2.5s;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default TeamHero;