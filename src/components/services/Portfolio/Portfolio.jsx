import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Plateforme de Formation IBMS",
    category: "Éducation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    description:
      "Une plateforme moderne pour la gestion des formations professionnelles et certifications.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Application de Gestion d'Entreprise",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description:
      "Solution complète pour la gestion interne des opérations, de la comptabilité et du personnel.",
    tags: ["Vue.js", "Laravel", "PostgreSQL"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Site Web Vitrine IBMS",
    category: "Design & Développement",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description:
      "Un site web responsive et moderne, conçu pour représenter la marque et ses valeurs.",
    tags: ["Next.js", "Tailwind", "Framer"],
    color: "from-emerald-500 to-teal-500"
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", "Éducation", "Business", "Design & Développement"];
  
  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Effets visuels d'arrière-plan améliorés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl top-1/2 right-0 animate-float-delayed"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl -bottom-32 left-1/4 animate-float-slow"></div>
        
        {/* Grille de points */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Nos Réalisations
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de projets conçus par notre équipe, alliant innovation, expertise et design de pointe.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
              </div>

              {/* Image du projet */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Badge catégorie flottant */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Overlay d'action au survol */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 group/btn">
                      <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 group/btn">
                      <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Détails du projet */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags technologiques */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bouton Voir Plus */}
                <button className="group/btn flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300">
                  <span>Voir le projet</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
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

              {/* Ligne de progression décorative */}
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <p className="text-white/60 mb-6">Vous avez un projet en tête ?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
            Discutons-en ensemble
          </button>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
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
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
          animation-delay: -5s;
        }
        .animate-float-slow {
          animation: float 30s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;