import React, { useState, useEffect, useRef } from 'react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: 'Paradigm Initiative',
      logo: '/images/partners/paradigm-initiative.png',
      description: 'Organisation de défense des droits numériques',
      category: 'ONG',
      emoji: '🛡️',
      color: 'primary',
      year: '2020'
    },
    {
      id: 2,
      name: 'Eclosio',
      logo: '/images/partners/partner1.png',
      description: 'Leader en solutions technologiques',
      category: 'Technologie',
      emoji: '💻',
      color: 'secondary',
      year: '2021'
    },
    {
      id: 3,
      name: 'ANPEJ',
      logo: '/images/partners/partner2.png',
      description: 'Expert en formation professionnelle',
      category: 'Éducation',
      emoji: '🎓',
      color: 'accent',
      year: '2019'
    },
    {
      id: 4,
      name: 'YMCA Sénégal',
      logo: '/images/partners/partner3.png',
      description: 'Spécialiste du marketing digital',
      category: 'Digital',
      emoji: '🚀',
      color: 'primary',
      year: '2022'
    },
    {
      id: 5,
      name: 'PLAN International',
      logo: '/images/partners/partner4.png',
      description: 'Centre d\'innovation et recherche',
      category: 'Innovation',
      emoji: '💡',
      color: 'secondary',
      year: '2020'
    },
    {
      id: 6,
      name: 'Thiès en Marche',
      logo: '/images/partners/partner5.png',
      description: 'Réseau international de formation',
      category: 'International',
      emoji: '🌍',
      color: 'accent',
      year: '2023'
    }
  ];

  const colorClasses = {
    primary: {
      bg: 'from-primary-500 to-primary-600',
      lightBg: 'bg-primary-50',
      text: 'text-primary-600',
      border: 'border-primary-500',
      glow: 'bg-primary-400'
    },
    secondary: {
      bg: 'from-secondary-500 to-secondary-600',
      lightBg: 'bg-secondary-50',
      text: 'text-secondary-600',
      border: 'border-secondary-500',
      glow: 'bg-secondary-400'
    },
    accent: {
      bg: 'from-accent-500 to-accent-600',
      lightBg: 'bg-accent-50',
      text: 'text-accent-600',
      border: 'border-accent-500',
      glow: 'bg-accent-400'
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, partners.length]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ultra-modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            <span className="text-2xl">🤝</span>
            <span className="text-primary-700">Nos partenaires de confiance</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-8 leading-tight">
            Ils croient en
            <span className="relative inline-block ml-4">
              <span className="bg-gradient-to-r  from-blue-400 via-primary-600 to-cyan-300  bg-clip-text text-transparent">
                notre vision
              </span>
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 5 150 5 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA"/>
                    <stop offset="50%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#67E8F9"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 leading-relaxed">
            Des <span className="font-bold text-primary-600">partenariats stratégiques</span> avec des organisations de renom 
            pour garantir une <span className="font-bold text-blue-400">formation d'excellence</span> et accompagner nos apprenants vers la réussite
          </p>

          {/* Progress bar for carousel */}
          <div className="flex justify-center gap-2 mt-8">
            {partners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="group relative"
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? 'w-16 bg-gradient-to-r from-primary-600 to-cyan-400' 
                    : 'w-8 bg-gray-300 group-hover:bg-gray-400'
                }`}/>
                {idx === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r  from-blue-400 via-primary-600 to-cyan-300  rounded-full blur-sm opacity-50"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Partners Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{ 
                animation: 'slideUp 0.8s ease-out forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 ${colorClasses[partner.color].glow} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 group-hover:border-gray-200 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                
                {/* Category badge + Year */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-4 py-1.5 ${colorClasses[partner.color].lightBg} ${colorClasses[partner.color].text} text-xs font-bold rounded-full shadow-md`}>
                    {partner.category}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">
                    Depuis {partner.year}
                  </span>
                </div>

                {/* Logo area with emoji */}
                <div className="relative flex items-center justify-center h-40 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-primary-50 group-hover:to-secondary-50 transition-all duration-500 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                  </div>
                  
                  {/* Emoji + Initial */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {partner.emoji}
                    </span>
                    <div className={`text-5xl font-black ${colorClasses[partner.color].text} opacity-30 group-hover:opacity-70 transition-opacity`}>
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>

                  {/* Hover shine effect */}
                  {hoveredPartner === partner.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-full animate-shine"></div>
                  )}
                </div>

                {/* Partner info */}
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 group-hover:bg-clip-text transition-all">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Footer with link */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-primary-600 transition-colors">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-4 left-4 w-3 h-3 ${colorClasses[partner.color].glow} rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Carousel - Mobile */}
        <div className="md:hidden relative mb-16">
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-1.5 ${colorClasses[partner.color].lightBg} ${colorClasses[partner.color].text} text-xs font-bold rounded-full`}>
                        {partner.category}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">
                        {partner.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-center h-48 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-7xl">{partner.emoji}</span>
                        <div className={`text-4xl font-black ${colorClasses[partner.color].text} opacity-40`}>
                          {partner.name.split(' ').map(word => word[0]).join('')}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 text-center">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-gray-700 hover:text-primary-600 hover:scale-110 transition-all z-10 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-gray-700 hover:text-primary-600 hover:scale-110 transition-all z-10 group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Trust indicators */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            { emoji: '🏆', value: '6+', label: 'Partenaires stratégiques', color: 'primary' },
            { emoji: '🌍', value: '4', label: 'Pays représentés', color: 'secondary' },
            { emoji: '✅', value: '100%', label: 'Certifications validées', color: 'accent' }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="group relative"
              style={{ 
                animation: 'slideUp 0.8s ease-out forwards',
                animationDelay: `${0.6 + idx * 0.15}s`,
                opacity: 0
              }}
            >
              <div className={`absolute -inset-1 ${colorClasses[item.color].glow} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              
              <div className="relative text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.emoji}
                </div>
                <h3 className={`text-4xl font-black ${colorClasses[item.color].text} mb-2`}>
                  {item.value}
                </h3>
                <p className="text-sm font-semibold text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-modern CTA */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r  from-blue-400 via-primary-600 to-cyan-300  rounded-full"></div>
          
          <div className="text-center pt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-2xl md:text-3xl text-gray-500 font-bold mb-8 leading-relaxed">
              Vous souhaitez <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">rejoindre</span> notre réseau ?
            </p>
            
            <button className="group relative px-10 py-5 bg-gradient-to-r  from-blue-400 via-primary-600 to-cyan-300  text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span>Devenir partenaire</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></span>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 1.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;