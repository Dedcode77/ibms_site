import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Header() {
  return (
    <header className=" top-0 left-0 right-0 bg-white/80 backdrop-blur z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/public/ibms_logo.png"
            alt="IBMS"
            className="w-15 h-10 rounded"
          />
          
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/formations" className="hover:text-primary">
            Formations
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/team" className="hover:text-primary">
            Équipe
          </Link>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-lg bg-primary text-white"
          >
            Contact
          </motion.button>
        </nav>

        {/* mobile menu icon */}
        <div className="md:hidden">{/* implement mobile later */}</div>
      </div>
    </header>
  );
}
