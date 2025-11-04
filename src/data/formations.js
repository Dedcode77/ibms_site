// src/data/formations.js
export const formations = [
  {
    id: 1,
    title: "Bureautique Complète",
    category: "Bureautique",
    description: "Maîtrisez Word, Excel, PowerPoint pour être efficace au bureau",
    duration: "3 mois",
    level: "Débutant",
    price: "75000",
    image: "/images/formations/bureautique.jpg",
    program: [
      "Microsoft Word : Documents professionnels",
      "Microsoft Excel : Tableaux et formules",
      "Microsoft PowerPoint : Présentations"
    ],
    instructor: "Mohamed NDIAYE",
    maxStudents: 15
  },
  {
    id: 2,
    title: "Développement Web",
    category: "Programmation",
    description: "HTML, CSS, JavaScript et React pour créer des sites modernes",
    duration: "6 mois",
    level: "Intermédiaire",
    price: "150000",
    image: "/images/formations/web-dev.jpg",
    program: [
      "HTML5 et CSS3",
      "JavaScript ES6+",
      "React.js",
      "Projets pratiques"
    ],
    instructor: "Salif CISS",
    maxStudents: 12
  },
  {
    id: 3,
    title: "Infographie",
    category: "Design",
    description: "Adobe Photoshop et Illustrator pour créer des visuels impactants",
    duration: "4 mois",
    level: "Débutant",
    price: "100000",
    image: "/images/formations/infographie.jpg",
    program: [
      "Adobe Photoshop : Retouche photo",
      "Adobe Illustrator : Design vectoriel",
      "Création de logos et affiches"
    ],
    instructor: "Ababacar NDIAYE",
    maxStudents: 10
  }
];

// Fonction pour récupérer une formation par ID
export const getFormationById = (id) => {
  return formations.find(formation => formation.id === parseInt(id));
};

// Fonction pour filtrer par catégorie
export const getFormationsByCategory = (category) => {
  return formations.filter(formation => formation.category === category);
};