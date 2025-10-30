import React, { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const dynamicWords = [
    { text: 'réussir', gradient: 'from-blue-400 via-primary-600 to-cyan-300' },
    { text: 'innover', gradient: 'from-blue-400 via-primary-600 to-cyan-300 '},
    { text: 'progresser', gradient: 'from-blue-400 via-primary-600 to-cyan-300' },
    { text: 'exceller', gradient: 'from-blue-400 via-primary-600 to-cyan-300' }
  ];

  // Animated word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Enhanced Background with theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-primary-600/20 rounded-full mix-blend-lighten filter blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-secondary-500/30 to-secondary-600/20 rounded-full mix-blend-lighten filter blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-40 w-[400px] h-[400px] bg-gradient-to-br from-accent-500/30 to-accent-600/20 rounded-full mix-blend-lighten filter blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-2 h-2 bg-primary-400/30' : 
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-secondary-400/30' : 
              'w-1 h-1 bg-accent-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-10 animate-fade-in">
          
          {/* Ultra-modern Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 animate-slide-down hover:scale-105 hover:border-white/40 transition-all duration-300 group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-accent-400 to-accent-500"></span>
            </span>
            <span className="text-sm font-bold text-white tracking-wide">
              Centre d'excellence en technologies de l'information
            </span>
            <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Ultra-modern heading with dynamic word */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-tight animate-slide-up">
              <span className="block text-white mb-4">
                Apprendre, évoluer,
              </span>
              <span className="block relative">
                <span className={`inline-block bg-gradient-to-r ${dynamicWords[currentWordIndex].gradient} bg-clip-text text-transparent animate-gradient-x transition-all duration-500`}>
                  {dynamicWords[currentWordIndex].text}.
                </span>
                
                {/* Animated underline */}
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span 
                      key={i}
                      className={`h-1.5 rounded-full bg-gradient-to-r ${dynamicWords[currentWordIndex].gradient} animate-pulse`}
                      style={{ 
                        width: i === 1 ? '80px' : '40px',
                        animationDelay: `${i * 0.2}s` 
                      }}
                    ></span>
                  ))}
                </span>
              </span>
            </h1>

            {/* Word indicators */}
            <div className="flex justify-center gap-2 pt-2">
              {dynamicWords.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentWordIndex 
                      ? 'w-12 bg-gradient-to-r from-primary-500 to-cyan-500' 
                      : 'w-8 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <p className="max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '0.1s' }}>
            Formez-vous aujourd'hui pour bâtir le{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
              succès de demain
            </span>, avec des compétences clés et durables.
            <span className="block mt-4 text-lg md:text-xl text-gray-300 font-normal">
              IBMS accompagne la jeunesse sénégalaise dans son{' '}
              <span className="text-blue-400 font-semibold">épanouissement</span> personnel, académique et professionnel.
            </span>
          </p>

          {/* Ultra-modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-600 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-primary-500/60 transition-all hover:scale-105 overflow-hidden min-w-[280px]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>Commencer maintenant</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></span>
            </button>

            <button className="group px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-xl min-w-[280px]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Découvrir nos formations
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '500+', label: 'Étudiants formés', emoji: '🎓', gradient: 'from-primary-500 to-primary-600' },
              { value: '15+', label: 'Formations disponibles', emoji: '📚', gradient: 'from-secondary-500 to-secondary-600' },
              { value: '98%', label: 'Taux de satisfaction', emoji: '⭐', gradient: 'from-accent-500 to-accent-600' },
              { value: '6+', label: 'Partenaires', emoji: '🤝', gradient: 'from-primary-600 to-secondary-600' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/40 hover:shadow-3xl hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`}></div>
                
                <div className="relative z-10 space-y-3">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {stat.emoji}
                  </div>
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-200 font-bold">
                    {stat.label}
                  </div>
                </div>

                {/* Animated corner dots */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.gradient} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>

          {/* Ultra-modern Scroll indicator */}
          <div className="pt-20 animate-bounce cursor-pointer group">
            <div className="inline-flex flex-col items-center gap-3">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-primary-400 transition-colors">
                Découvrir plus
              </span>
              <div className="relative">
                <div className="w-8 h-12 border-2 border-gray-600 group-hover:border-primary-500 rounded-full flex items-start justify-center p-2 transition-colors">
                  <div className="w-1.5 h-3 bg-gray-500 group-hover:bg-primary-500 rounded-full animate-scroll transition-colors"></div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 border-2 border-primary-500/50 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div> */}

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px) translateX(15px) rotate(180deg);
            opacity: 0.8;
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;