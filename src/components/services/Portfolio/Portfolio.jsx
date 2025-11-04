import React from "react";

const projects = [
  {
    id: 1,
    title: "Plateforme de Formation IBMS",
    category: "Éducation",
    image: "/images/portfolio/formation.jpg",
    description:
      "Une plateforme moderne pour la gestion des formations professionnelles et certifications.",
  },
  {
    id: 2,
    title: "Application de Gestion d’Entreprise",
    category: "Business",
    image: "/images/portfolio/gestion.jpg",
    description:
      "Solution complète pour la gestion interne des opérations, de la comptabilité et du personnel.",
  },
  {
    id: 3,
    title: "Site Web Vitrine IBMS",
    category: "Design & Développement",
    image: "/images/portfolio/siteweb.jpg",
    description:
      "Un site web responsive et moderne, conçu pour représenter la marque et ses valeurs.",
  },
];

const Portfolio = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Effets visuels d’arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          Nos Réalisations
        </h2>
        <p className="text-white/80 text-lg mb-16 max-w-3xl mx-auto">
          Découvrez une sélection de projets conçus par notre équipe, alliant innovation, expertise et design.
        </p>

        {/* Grille des projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Image du projet */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Détails du projet */}
              <div className="p-6 text-left">
                <span className="inline-block text-sm text-cyan-400 font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Bouton Voir Plus */}
                <button className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Voir le projet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles d’animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
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

export default Portfolio;
