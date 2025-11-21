import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Exemple de données (tu peux les importer d’un fichier JSON plus tard)
const formations = [
  {
    id: "bureautique",
    title: "Bureautique",
    description:
      "Maîtrisez Word, Excel, PowerPoint et les outils de productivité indispensables pour le monde professionnel.",
    image: "/images/formations/bureautique.jpg",
    modules: [
      "Initiation à Word et Excel",
      "Création de présentations PowerPoint",
      "Trucs et astuces de productivité",
      "Mise en page et automatisation"
    ],
  },
  {
    id: "programmation",
    title: "Programmation",
    description:
      "Apprenez à coder des sites web, applications et logiciels modernes avec HTML, CSS, JavaScript, Python et plus encore.",
    image: "/images/formations/programmation.jpg",
    modules: [
      "HTML / CSS / JavaScript",
      "React et Node.js",
      "Bases de données (MySQL, MongoDB)",
      "Projets pratiques"
    ],
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital",
    description:
      "Découvrez comment booster la visibilité d’une marque en ligne à travers le SEO, les réseaux sociaux et la publicité digitale.",
    image: "/images/formations/marketing.jpg",
    modules: [
      "Stratégie de contenu",
      "Publicité Facebook et Google",
      "Analyse de performance (Google Analytics)",
      "Community Management"
    ],
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    description:
      "Explorez le monde fascinant de l’IA, du Machine Learning et du Deep Learning avec des projets concrets.",
    image: "/images/formations/ia.jpg",
    modules: [
      "Introduction au Machine Learning",
      "Python pour l’IA",
      "Réseaux de neurones",
      "Projets IA réels"
    ],
  },
  {
    id: "cybersecurite",
    title: "Cybersécurité",
    description:
      "Protégez les systèmes et les données contre les cyberattaques grâce à des techniques avancées de sécurité.",
    image: "/images/formations/cyber.jpg",
    modules: [
      "Introduction à la sécurité informatique",
      "Pentesting et hacking éthique",
      "Sécurité réseau et cloud",
      "Analyse des menaces"
    ],
  },
];

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formations.find((f) => f.id === id);

  if (!formation) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          Formation introuvable 😢
        </h2>
        <Link
          to="/formations"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Retour à la liste des formations
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-4 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <motion.img
          src={formation.image}
          alt={formation.title}
          className="w-full h-64 object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {formation.title}
            </h1>
            <Link
              to="/formations"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} /> Retour
            </Link>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {formation.description}
          </p>

          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Modules inclus :
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {formation.modules.map((module, index) => (
              <motion.li
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-blue-700 shadow-sm hover:bg-blue-100 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {module}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FormationDetail;
