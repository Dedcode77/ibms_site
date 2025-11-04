import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulation de l’envoi (tu brancheras plus tard ton backend Node ici)
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ nom: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-center overflow-hidden">
      {/* Effet lumineux d’arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          Contactez-nous
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Une question, un projet ou une idée ? Écrivez-nous et notre équipe vous répondra rapidement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-xl space-y-6 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              placeholder="exemple@domaine.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white hover:scale-105 transition-transform duration-300 disabled:opacity-60"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-4 animate-fade-in">
              ✅ Message envoyé avec succès ! Nous vous répondrons bientôt.
            </p>
          )}
        </form>
      </div>

      {/* Styles d’animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default ContactForm;
