import React from "react";

const Map = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-center text-white overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Titre */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 22s8-6.5 8-13a8 8 0 10-16 0c0 6.5 8 13 8 13z"
            />
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            Notre Localisation
          </h2>
        </div>

        {/* Description */}
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Retrouvez-nous à Dakar, dans un espace moderne dédié à l’innovation, la technologie et la formation.
        </p>

        {/* Carte intégrée */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:scale-[1.01] transition-transform duration-500">
          <iframe
            title="Localisation IBMS"
            src="https://www.google.com/maps?q=Dakar,+Sénégal&output=embed"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            className="w-full h-[450px] md:h-[500px] border-none rounded-3xl"
          ></iframe>
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
            📍 Dakar, Sénégal
          </div>
        </div>

        {/* Bouton Google Maps */}
        <div className="mt-8">
          <a
            href="https://www.google.com/maps/place/Dakar,+Sénégal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>

      {/* Styles animés */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
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

export default Map;
