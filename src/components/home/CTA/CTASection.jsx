import React from 'react';
import Button from '../../common/Button/Button';

const CTASection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: 'Formateurs experts et certifiés'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: 'Certificats reconnus'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: 'Suivi personnalisé'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: 'Accès à vie aux ressources'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 ">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating elements decoration */}
      <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-white/25 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Content */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">
              Inscriptions ouvertes
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight animate-slide-up">
            Prêt à transformer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
              votre carrière ?
            </span>
          </h2>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Rejoignez des centaines d'apprenants qui ont déjà fait le choix de l'excellence avec IBMS. 
            Commencez votre formation dès aujourd'hui !
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="blue"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 min-w-[220px] group"
            >
              <span className="flex items-center gap-2">
                Commencer maintenant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 min-w-[220px] group"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Nous contacter
              </span>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-accent-200 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <span className="text-sm font-medium text-white/90">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-white/80">Étudiants formés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-sm text-white/80">Formations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-white/80">Satisfaction</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 text-white/70 text-sm">
            <svg className="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Paiement sécurisé • Garantie satisfaction • Support 7j/7</span>
          </div>
        </div>

      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          {/* <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path> */}
        </svg>
      </div>
    </section>
  );
};

export default CTASection;