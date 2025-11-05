import React, { useState } from "react";

const partners = [
  { 
    id: 1, 
    name: "Paradigm Initiative", 
    logo: "/images/partners/Paradigm-initiative.png",
    description: "Organisation panafricaine pour les droits numériques",
    category: "Tech & Innovation"
  },
  { 
    id: 2, 
    name: "Eclosio", 
    logo: "/images/partners/eclosioo.png",
    description: "Coopération et développement durable",
    category: "Développement"
  },
  { 
    id: 3, 
    name: "ANPEJ", 
    logo: "/images/partners/anpej.png",
    description: "Agence Nationale pour la Promotion de l'Emploi des Jeunes",
    category: "Emploi"
  },
  { 
    id: 4, 
    name: "YMCA Sénégal", 
    logo: "/images/partners/ymca.jpeg",
    description: "Alliance Mondiale des Unions Chrétiennes",
    category: "Jeunesse"
  },
  { 
    id: 5, 
    name: "PLAN International", 
    logo: "/images/partners/plan.png",
    description: "Organisation humanitaire centrée sur les droits des enfants",
    category: "Humanitaire"
  },
  { 
    id: 6, 
    name: "Thiès en Marche", 
    logo: "/images/partners/thies.png",
    description: "Initiative locale pour le développement",
    category: "Local"
  },
  { 
    id: 7, 
    name: "CMC Afrique", 
    logo: "/images/partners/cmc.png",
    description: "Centre Multimédia Communautaire",
    category: "Média & Communication"
  },
  { 
    id: 8, 
    name: "Belgium", 
    logo: "/images/partners/belgium.png",
    description: "Coopération Belge au Développement",
    category: "Coopération"
  }
];

const PartnersSection = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <section className="relative py-24 px-8 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-500/50">
              🤝 Nos Partenaires
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec des organisations de premier plan engagées pour soutenir l'innovation, l'éducation et l'impact social.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {partners.length}+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Partenaires</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Pays</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Bénéficiaires</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projets</div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center">
                {/* Logo */}
                <div className="w-full h-24 mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Category Badge */}
                <span className="px-3 py-1 bg-white/10 text-gray-400 text-xs font-medium rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
                  {partner.category}
                </span>

                {/* Hover Description */}
                {hoveredPartner === partner.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Nos Partenaires en Action
          </h3>
          <div className="relative h-24 overflow-hidden">
            <div className="absolute flex animate-scroll">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`carousel-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-90 hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl shadow-cyan-500/20 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Devenez Partenaire
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires engagés et participez à la transformation digitale de l'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl group">
                <span className="flex items-center gap-2 justify-center">
                  Contactez-nous
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;