import React from "react";

const ContactInfo = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-center text-white overflow-hidden">
      {/* Effet d’arrière-plan animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          Nos Coordonnées
        </h2>
        <p className="text-white/80 text-lg mb-16 max-w-2xl mx-auto">
          Retrouvez toutes nos informations de contact pour échanger avec notre équipe ou visiter nos bureaux.
        </p>

        {/* Grille d'informations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          
          {/* Adresse */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-6.5 8-13a8 8 0 10-16 0c0 6.5 8 13 8 13z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Adresse</h3>
            <p className="text-white/70">
              Dakar, Sénégal<br />Sacré-Cœur 3, Rue 15
            </p>
          </div>

          {/* Téléphone */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.5 3a10.003 10.003 0 006.5 6.5L16 19l7 3v-2a10 10 0 00-10-10H9l-1-2H3z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
            <p className="text-white/70">
              +221 77 123 45 67<br />+221 33 456 78 90
            </p>
          </div>

          {/* E-mail */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-white/70">
              contact@ibms.sn<br />support@ibms.sn
            </p>
          </div>

          {/* Horaires */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Horaires</h3>
            <p className="text-white/70">
              Lundi – Vendredi : 8h30 – 18h00<br />
              Samedi : 9h00 – 13h00
            </p>
          </div>

          {/* Site Web */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.05 11H21.95M12 2.05v19.9M4.22 4.22a9.003 9.003 0 0115.56 0M4.22 19.78a9.003 9.003 0 0115.56 0" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Site Web</h3>
            <p className="text-white/70">
              <a href="https://ibms.sn" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                www.ibms.sn
              </a>
            </p>
          </div>

          {/* Carte Google Maps */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <iframe
              title="Localisation IBMS"
              src="https://www.google.com/maps?q=Dakar,+Sénégal&output=embed"
              className="w-full h-48 rounded-lg border-none"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
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

export default ContactInfo;
