import React, { useState, useEffect, useRef } from 'react';

const ServicesList = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Création de Sites Web',
      emoji: '🌐',
      description: 'Sites web professionnels, boutiques en ligne et applications web sur mesure avec les dernières technologies',
      features: [
        'Sites vitrines modernes',
        'E-commerce complet',
        'Applications web responsive',
        'SEO optimisé',
        'Performance garantie',
        'Maintenance incluse'
      ],
      color: 'primary',
      badge: 'Populaire',
      stats: { projects: '50+', satisfaction: '98%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Conception Graphique',
      emoji: '🎨',
      description: 'Identité visuelle complète pour votre marque : logos, affiches, cartes de visite et bien plus',
      features: [
        'Design de logo professionnel',
        'Charte graphique complète',
        'Affiches publicitaires',
        'Cartes de visite premium',
        'Supports marketing',
        'Mockups & prototypes'
      ],
      color: 'secondary',
      badge: 'Créatif',
      stats: { projects: '120+', satisfaction: '95%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Solutions Digitales',
      emoji: '💡',
      description: 'Transformation digitale complète de votre entreprise avec solutions innovantes et sur mesure',
      features: [
        'Audit digital complet',
        'Stratégie de transformation',
        'Automatisation des processus',
        'Outils de gestion cloud',
        'Formation du personnel',
        'Support continu'
      ],
      color: 'accent',
      badge: 'Innovation',
      stats: { projects: '30+', satisfaction: '100%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Vente d\'Ordinateurs',
      emoji: '💻',
      description: 'Ordinateurs neufs et reconditionnés certifiés, adaptés à vos besoins professionnels et personnels',
      features: [
        'PC portables & desktop',
        'Matériel reconditionné certifié',
        'Configuration personnalisée',
        'Garantie constructeur',
        'Support technique inclus',
        'Livraison & installation'
      ],
      color: 'primary',
      badge: 'Qualité',
      stats: { projects: '200+', satisfaction: '97%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Marketing Digital',
      emoji: '📱',
      description: 'Stratégies marketing complètes pour développer votre présence en ligne et booster vos ventes',
      features: [
        'Gestion réseaux sociaux',
        'Campagnes publicitaires ciblées',
        'Content marketing',
        'Analytics & reporting détaillés',
        'SEO & référencement',
        'Growth hacking'
      ],
      color: 'secondary',
      badge: 'ROI Garanti',
      stats: { projects: '80+', satisfaction: '96%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Support Technique',
      emoji: '🛠️',
      description: 'Maintenance et support technique professionnel pour tous vos équipements informatiques',
      features: [
        'Dépannage à distance 24/7',
        'Réparation matériel express',
        'Installation logiciels',
        'Sécurisation système avancée',
        'Sauvegarde données cloud',
        'Contrats de maintenance'
      ],
      color: 'accent',
      badge: 'Rapide',
      stats: { projects: '300+', satisfaction: '99%' },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const colorClasses = {
    primary: {
      bg: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-500',
      glow: 'bg-blue-400',
      shadow: 'shadow-blue-500/50',
      badgeBg: 'from-blue-500 to-cyan-500'
    },
    secondary: {
      bg: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-500',
      glow: 'bg-purple-400',
      shadow: 'shadow-purple-500/50',
      badgeBg: 'from-purple-500 to-pink-500'
    },
    accent: {
      bg: 'from-green-500 to-green-600',
      lightBg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-500',
      glow: 'bg-green-400',
      shadow: 'shadow-green-500/50',
      badgeBg: 'from-green-500 to-emerald-500'
    }
  };

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

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible, services.length]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-br  from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            <span className="text-2xl animate-bounce">💼</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Excellence & Innovation
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-100 mb-6 leading-tight">
            Nos Services
            <span className="relative inline-block ml-4">
              <span className="bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 bg-clip-text text-transparent">
                Premium
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
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-100 leading-relaxed">
            Des solutions <span className="font-bold text-blue-600">professionnelles</span> et{' '}
            <span className="font-bold text-blue-600">innovantes</span> pour propulser{' '}
            <span className="font-bold text-blue-600">votre succès</span>
          </p>

          {/* Service indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveService(idx)}
                className="group relative"
                aria-label={`Service ${idx + 1}`}
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeService 
                    ? 'w-16 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300' 
                    : 'w-8 bg-gray-300 group-hover:bg-gray-400'
                }`}/>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => {
                setHoveredService(service.id);
                setActiveService(index);
              }}
              onMouseLeave={() => setHoveredService(null)}
              style={{ 
                animation: 'slideUp 0.8s ease-out forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 ${colorClasses[service.color].glow} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                activeService === index ? 'border-gray-300 shadow-2xl scale-105' : 'border-gray-100'
              } hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2`}>
                
                {/* Badge */}
                <div className={`absolute -top-3 -right-3 px-4 py-1.5 bg-gradient-to-r ${colorClasses[service.color].badgeBg} rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1`}>
                  <span>⭐</span>
                  <span>{service.badge}</span>
                </div>

                {/* Header with emoji and icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 ${colorClasses[service.color].lightBg} rounded-2xl flex items-center justify-center text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {service.emoji}
                  </div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[service.color].bg} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      📊
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Projets</div>
                      <div className="text-sm font-bold text-gray-900">{service.stats.projects}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      ❤️
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                      <div className="text-sm font-bold text-gray-900">{service.stats.satisfaction}</div>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 group/item hover:translate-x-1 transition-transform">
                      <div className={`w-5 h-5 bg-gradient-to-br ${colorClasses[service.color].bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`mt-auto w-full py-4 bg-gradient-to-r ${colorClasses[service.color].bg} text-white rounded-xl font-bold shadow-lg hover:shadow-2xl ${colorClasses[service.color].shadow} transition-all hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden`}>
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Découvrir</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-1000"></div>
                </button>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colorClasses[service.color].bg} rounded-b-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 rounded-full shadow-lg"></div>
          
          <div className="text-center pt-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                🚀
              </div>
              <p className="text-3xl md:text-4xl text-gray-100 font-black">
                Prêt à démarrer votre projet ?
              </p>
            </div>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Obtenez un devis personnalisé en moins de 24h et bénéficiez de notre expertise
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-blue-500/60 transition-all hover:scale-105 overflow-hidden min-w-[280px]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Devis Gratuit</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary-600 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </button>

              <button className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-800 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all hover:scale-105 flex items-center gap-3 shadow-lg min-w-[280px] group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Nous Appeler
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">Satisfaction garantie</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default ServicesList;