import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Optimized stats data
  const stats = [
    {
      id: 1,
      value: 500,
      suffix: "+",
      emoji: "🎓",
      label: "Étudiants formés",
      description: "Des apprenants satisfaits et compétents",
      color: "primary",
      metric: "+45% cette année",
      detail: "Croissance continue depuis 2020",
    },
    {
      id: 2,
      value: 15,
      suffix: "+",
      emoji: "📚",
      label: "Formations disponibles",
      description: "Programmes adaptés aux besoins du marché",
      color: "secondary",
      metric: "Mise à jour continue",
      detail: "Contenu actualisé mensuellement",
    },
    {
      id: 3,
      value: 98,
      suffix: "%",
      emoji: "⭐",
      label: "Taux de satisfaction",
      description: "Des apprenants qui recommandent IBMS",
      color: "accent",
      metric: "4.9/5 étoiles",
      detail: "Basé sur 350+ avis vérifiés",
    },
    {
      id: 4,
      value: 6,
      suffix: "+",
      emoji: "🤝",
      label: "Partenaires stratégiques",
      description: "Collaborations pour votre réussite",
      color: "primary",
      metric: "Réseau international",
      detail: "Partenariats avec des leaders du secteur",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "from-primary-500 to-primary-600",
      text: "text-primary-600",
      lightBg: "bg-primary-50",
      darkBg: "bg-primary-600",
      ring: "ring-primary-500/30",
      glow: "bg-primary-400",
      shadow: "shadow-primary-500/50",
      border: "border-primary-500",
    },
    secondary: {
      bg: "from-secondary-500 to-secondary-600",
      text: "text-secondary-600",
      lightBg: "bg-secondary-50",
      darkBg: "bg-secondary-600",
      ring: "ring-secondary-500/30",
      glow: "bg-secondary-400",
      shadow: "shadow-secondary-500/50",
      border: "border-secondary-500",
    },
    accent: {
      bg: "from-accent-500 to-accent-600",
      text: "text-accent-600",
      lightBg: "bg-accent-50",
      darkBg: "bg-accent-600",
      ring: "ring-accent-500/30",
      glow: "bg-accent-400",
      shadow: "shadow-accent-500/50",
      border: "border-accent-500",
    },
  };

  // Enhanced Counter with percentage animation
  const CounterAnimation = ({ end, suffix, duration = 2500, isHovered }) => {
    const [count, setCount] = useState(0);
    const [showSparkle, setShowSparkle] = useState(false);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const easeOutCubic = (t) => --t * t * t + 1;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        setCount(Math.floor(easedProgress * end));

        if (progress >= 0.99 && !showSparkle) {
          setShowSparkle(true);
          setTimeout(() => setShowSparkle(false), 600);
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
      <div className="relative inline-block">
        <span
          className={`text-5xl md:text-6xl lg:text-7xl font-bold font-heading transition-all duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {count}
          {suffix}
        </span>
        {showSparkle && (
          <span className="absolute -top-2 -right-2 text-2xl animate-ping">
            ✨
          </span>
        )}
      </div>
    );
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Auto-rotate active stat
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, stats.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background with animated gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-secondary-500/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Animated grid with perspective */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.02]"
        style={{ transform: "perspective(1000px) rotateX(60deg)" }}
      ></div>

      {/* Enhanced floating particles with varied sizes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? "w-2 h-2" : "w-1 h-1"
            } ${i % 2 === 0 ? "bg-white/30" : "bg-blue-400/40"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra-modern Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold mb-8 shadow-2xl hover:scale-105 hover:border-white/40 transition-all group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-400 to-blue-500"></span>
            </span>
            <span className="text-white tracking-wide">NOS CHIFFRES CLÉS</span>
            <svg
              className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-8 leading-tight">
            L'impact d'
            <span className="relative inline-block">
              <span className="bg-gradient-to-r  from-blue-400 via-primary-600 to-cyan-300  bg-clip-text text-transparent animate-gradient-x">
                IBMS
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 rounded-full"></span>
            </span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              en chiffres
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            Des résultats{" "}
            <span className="text-blue-400 font-bold">concrets</span> qui
            témoignent de notre engagement envers l'
            <span className="text-primary-600 font-bold">excellence</span> et la{" "}
            <span className="text-cyan-300 font-bold">réussite</span> de
            nos apprenants
          </p>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {stats.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? "w-12 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300"
                    : "w-8 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Grid with stagger animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              onMouseEnter={() => {
                setHoveredStat(stat.id);
                setActiveIndex(index);
              }}
              onMouseLeave={() => setHoveredStat(null)}
              style={{
                animation:
                  "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              {/* Multi-layer glow effect */}
              <div
                className={`absolute -inset-2 ${
                  colorClasses[stat.color].glow
                } rounded-3xl opacity-0 group-hover:opacity-40 blur-3xl transition-all duration-700`}
              ></div>
              <div
                className={`absolute -inset-1 ${
                  colorClasses[stat.color].glow
                } rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              ></div>

              {/* Main Card with enhanced glass effect */}
              <div
                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border ${
                  activeIndex === index
                    ? "border-white/40 shadow-2xl"
                    : "border-white/20"
                } hover:border-white/50 shadow-xl ${
                  hoveredStat === stat.id
                    ? colorClasses[stat.color].shadow + " shadow-2xl"
                    : ""
                } transition-all duration-700 h-full flex flex-col group-hover:-translate-y-3 group-hover:scale-[1.02]`}
              >
                {/* Top badge - active indicator */}
                {activeIndex === index && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 rounded-full text-xs font-bold text-white shadow-lg animate-bounce-slow">
                    ⚡ En vedette
                  </div>
                )}

                {/* Emoji with enhanced animation */}
                <div className="relative mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-24 h-24 ${
                      colorClasses[stat.color].lightBg
                    } rounded-3xl text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl ${
                      activeIndex === index ? "animate-pulse-slow" : ""
                    }`}
                  >
                    {stat.emoji}
                  </div>

                  {/* Animated ring on hover */}
                  {hoveredStat === stat.id && (
                    <>
                      <div className="absolute inset-0 rounded-3xl border-4 border-white/50 animate-ping"></div>
                      <div className="absolute inset-0 rounded-3xl border-2 border-white/70 animate-pulse"></div>
                    </>
                  )}

                  {/* Corner sparkles */}
                  <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-spin-slow">
                    ✨
                  </div>
                </div>

                {/* Counter with enhanced styling */}
                <div className={`${colorClasses[stat.color].text} mb-6`}>
                  <CounterAnimation
                    end={stat.value}
                    suffix={stat.suffix}
                    isHovered={hoveredStat === stat.id}
                  />
                </div>

                {/* Label with gradient on hover */}
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 flex-grow">
                  {stat.description}
                </p>

                {/* Metric badge - always visible with better design */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${
                    colorClasses[stat.color].bg
                  } rounded-full text-xs font-bold text-white self-start shadow-lg transform group-hover:scale-105 transition-all`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {stat.metric}
                </div>

                {/* Detail info on hover */}
                <div className="mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                  {stat.detail}
                </div>

                {/* Decorative corner dots */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <div
                    className={`w-2 h-2 ${
                      colorClasses[stat.color].glow
                    } rounded-full opacity-40 group-hover:opacity-100 transition-opacity animate-pulse`}
                  ></div>
                  <div
                    className={`w-2 h-2 ${
                      colorClasses[stat.color].glow
                    } rounded-full opacity-40 group-hover:opacity-100 transition-opacity animate-pulse`}
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className={`w-2 h-2 ${
                      colorClasses[stat.color].glow
                    } rounded-full opacity-40 group-hover:opacity-100 transition-opacity animate-pulse`}
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Animated bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                    colorClasses[stat.color].bg
                  } rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-modern CTA section */}
        <div className="relative">
          {/* Decorative gradient line with glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-1.5 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 rounded-full shadow-lg"></div>
            <div className="w-40 h-1.5 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 rounded-full blur-xl opacity-50 absolute top-0"></div>
          </div>

          <div
            className="text-center pt-16 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-2xl md:text-3xl text-white font-bold mb-10 leading-relaxed">
              Rejoignez{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 bg-clip-text text-transparent">
                  +500 apprenants
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-cyan-400"></span>
              </span>{" "}
              qui ont
              <br className="hidden sm:block" />
              transformé leur carrière avec{" "}
              <span className="text-cyan-400">IBMS</span> 🚀
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-primary-500/60 transition-all hover:scale-105 overflow-hidden min-w-[280px]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span>Découvrir nos formations</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></span>
              </button>

              <button className="group px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 flex items-center gap-3 shadow-xl min-w-[280px]">
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Parler à un conseiller
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-25px) translateX(10px) rotate(120deg);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-15px) translateX(-10px) rotate(240deg);
            opacity: 0.6;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
