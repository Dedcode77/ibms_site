import React from "react";

const Loader = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-center text-white overflow-hidden">
      {/* Cercles animés en fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Animation du loader */}
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-cyan-400 animate-spin-slow"></div>
          <div className="absolute inset-3 rounded-full border-4 border-t-transparent border-indigo-500 animate-spin-reverse"></div>
        </div>

        {/* Texte */}
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          Chargement...
        </h2>
        <p className="text-white/70 text-lg">
          Veuillez patienter, nous préparons vos données.
        </p>
      </div>

      {/* Styles personnalisés */}
      <style jsx>{`
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 3s linear infinite reverse;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Loader;
