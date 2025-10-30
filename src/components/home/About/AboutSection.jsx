import React, { useState, useEffect, useRef } from 'react';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Features data - optimized and centralized
  const features = [
    {
      icon: '💡',
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Des programmes éducatifs et technologiques innovants pour la jeunesse sénégalaise",
      gradient: "from-yellow-100 to-orange-100"
    },
    {
      icon: '🎓',
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Formation d'excellence",
      description: "Un centre d'excellence pour l'apprentissage de l'informatique et des métiers du numérique",
      gradient: "from-primary-100 to-secondary-100"
    },
    {
      icon: '👥',
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Pour tous",
      description: "Élèves, étudiants, professionnels, particuliers et passionnés sont les bienvenus",
      gradient: "from-accent-100 to-green-100"
    },
    {
      icon: '⚡',
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Compétences durables",
      description: "Des compétences clés essentielles dans le monde connecté d'aujourd'hui",
      gradient: "from-purple-100 to-pink-100"
    }
  ];

  // Key points data - optimized
  const keyPoints = [
    "Centre d'excellence en technologies de l'information",
    "Formations adaptées aux besoins du marché digital",
    "Accompagnement personnalisé pour chaque apprenant"
  ];

  // Stats data
  const stats = [
    { value: '500+', label: 'Étudiants formés', icon: '🎓' },
    { value: '98%', label: 'Satisfaction', icon: '⭐' },
    { value: '15+', label: 'Formations', icon: '📚' }
  ];

  // Intersection Observer for animations
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

  // Auto-rotate featured item
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isVisible, features.length]);

  // Reusable CheckIcon component
  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900  overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <span className="text-lg">ℹ️</span>
            <span>À propos de nous</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Une start-up innovante
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 bg-clip-text text-transparent">
              au service de la transformation digitale
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
            IBMS est une start-up innovante spécialisée dans le secteur des <span className="font-semibold text-primary-600">technologies de l'information</span>, 
            et se positionne comme un <span className="font-semibold text-cyan-600">centre d'excellence</span> pour l'apprentissage de l'informatique.
          </p>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Enhanced Image/Visual */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              {/* Gradient placeholder with pattern */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-primary-600 to-cyan-300 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 transform group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating badge with animation */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-primary-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">
                  RID
                </div>
                <div className="text-xs text-gray-700 font-semibold leading-tight">
                  Recherche, Innovation<br/>& Développement
                </div>
              </div>

              {/* Stats overlay - bottom left */}
              <div className="absolute bottom-6 left-6 flex gap-3">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg transform hover:scale-105 transition-all">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-200 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-200 rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Decorative dots pattern */}
            <div className="absolute -bottom-8 -right-8 -z-10">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary-300 rounded-full opacity-50" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Enhanced Text Content */}
          <div className="space-y-8">
            {/* Intro text with enhanced styling */}
            <div className="space-y-5">
              <p className="text-lg text-gray-500 leading-relaxed">
                Nous accueillons un <span className="font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">large éventail de participants</span> : 
                élèves, étudiants, professionnels, particuliers et passionnés, désireux de renforcer leurs compétences 
                dans les métiers du numérique.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                À travers notre département <span className="font-bold text-cyan-600 bg-secondary-50 px-2 py-1 rounded">Recherche, Innovation et Développement (RID)</span>, 
                nous développons des programmes éducatifs et technologiques innovants pour accompagner la jeunesse sénégalaise 
                dans son épanouissement personnel, académique et professionnel.
              </p>
            </div>

            {/* Enhanced Key Points */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-6 space-y-4 border border-blue-200">
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Nos atouts
              </h3>
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-md">
                    <CheckIcon />
                    <span className="text-white text-sm">
                      {/* Icon already rendered */}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium leading-relaxed group-hover:text-blue-700 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="group shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  En savoir plus sur IBMS
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid with progressive indicators */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Pourquoi choisir <span className="text-primary-600">IBMS</span> ?
            </h3>
            <div className="flex justify-center gap-2">
              {features.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === activeFeature ? 'w-12 bg-primary-600' : 'w-8 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                hover
                padding="lg"
                className={`text-center group relative overflow-hidden transition-all duration-500 ${
                  idx === activeFeature ? 'ring-2 ring-primary-500 shadow-2xl scale-105' : ''
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Dual icon display: emoji + svg */}
                  <div className="mb-4 flex flex-col items-center gap-2">
                    <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {feature.icon}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600">
                        {feature.iconSvg}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Active indicator */}
                {idx === activeFeature && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                )}
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;