
// ========================================
// TeamGrid.jsx - Version Améliorée
// ========================================

import React, { useState } from "react";

const TeamGrid = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Données de l'équipe IBMS
  const teamMembers = [
    {
      id: 1,
      name: "Mohamed NDIAYE",
      role: "Fondateur/CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Passionné de technologie et d'éducation, Mohamed a fondé IBMS avec la vision de démocratiser l'accès aux compétences numériques.",
      experience: "10+ ans",
      skills: ["Management", "Stratégie", "Leadership"],
      email: "mohamed@ibms.sn",
      color: "from-cyan-500 to-blue-500",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mohamed@ibms.sn",
      },
    },
    {
      id: 2,
      name: "Amadou Moustapha DEM",
      role: "Responsable Opérations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Expert en gestion de projets, Amadou coordonne les opérations quotidiennes et assure la qualité de nos services.",
      experience: "8+ ans",
      skills: ["Gestion", "Coordination", "Planification"],
      email: "amadou@ibms.sn",
      color: "from-blue-500 to-indigo-500",
      social: {
        linkedin: "#",
        email: "amadou@ibms.sn",
      },
    },
    {
      id: 3,
      name: "Ababacar NDIAYE",
      role: "Designer Graphique",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Designer créatif et formateur en infographie, Ababacar crée des visuels impactants qui marquent les esprits.",
      experience: "6+ ans",
      skills: ["Photoshop", "Illustrator", "UI/UX"],
      email: "ababacar@ibms.sn",
      color: "from-purple-500 to-pink-500",
      social: {
        behance: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Mouhamadou Mouktar DIA",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Expert en marketing digital, Mouktar gère notre présence en ligne et forme nos étudiants au marketing digital.",
      experience: "5+ ans",
      skills: ["Marketing", "SEO", "Social Media"],
      email: "mouktar@ibms.sn",
      color: "from-orange-500 to-red-500",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Salif CISS",
      role: "Développeur Full-Stack",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Développeur passionné, Salif crée des solutions web innovantes et transmet son savoir aux futurs développeurs.",
      experience: "7+ ans",
      skills: ["React", "Node.js", "Python"],
      email: "salif@ibms.sn",
      color: "from-green-500 to-emerald-500",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Issa DIEDHIOU",
      role: "Expert Cybersécurité",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Expert en cybersécurité, Issa protège nos systèmes et sensibilise aux enjeux de la sécurité numérique.",
      experience: "6+ ans",
      skills: ["Cybersécurité", "Réseaux", "Ethical Hacking"],
      email: "issa@ibms.sn",
      color: "from-red-500 to-pink-500",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ];

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
        </svg>
      ),
      twitter: <span className="text-xl">🐦</span>,
      github: <span className="text-xl">💻</span>,
      behance: <span className="text-xl">🎨</span>,
      instagram: <span className="text-xl">📷</span>,
      email: <span className="text-xl">✉️</span>,
    };
    return icons[platform] || null;
  };

  return (
    <section
      id="team-grid"
      className="py-24 bg-gradient-to-b from-slate-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 text-sm font-semibold mb-6 text-cyan-400">
            🌟 Les Talents IBMS
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Notre{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Équipe
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Découvrez les experts qui font la force d'IBMS
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 rounded-3xl blur-2xl transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/30">
                    <span className="text-white text-sm font-bold">{member.experience}</span>
                  </div>

                  {/* Social icons - visible on hover */}
                  <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 transition-all duration-500 ${
                      hoveredMember === member.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={platform === "email" ? `mailto:${url}` : url}
                        className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:${member.color} hover:text-white transition-all duration-300 hover:scale-110 shadow-lg`}
                        target={platform !== "email" ? "_blank" : undefined}
                        rel={platform !== "email" ? "noopener noreferrer" : undefined}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Role badge */}
                  <div
                    className={`inline-block px-4 py-1.5 bg-gradient-to-r ${member.color} rounded-full text-white text-sm font-bold mb-4`}
                  >
                    {member.role}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                    {member.name}
                  </h3>

                  <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-semibold text-white/90 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Rejoignez Notre Aventure 🚀
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Vous souhaitez faire partie d'une équipe exceptionnelle ? Découvrez nos
                opportunités de carrière
              </p>
              <button className="px-10 py-5 bg-white text-blue-600 font-black rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg group inline-flex items-center gap-3">
                <span>Voir nos offres d'emploi</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
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
              </button>
            </div>
          </div>
        </div>
      </div>

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

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TeamGrid;