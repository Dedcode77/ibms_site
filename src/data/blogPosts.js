// ============================================
// src/data/blogPosts.js
// ============================================

// Tableau des articles de blog
export const blogPosts = [
  {
    id: 1,
    title: "L'avenir de l'Intelligence Artificielle en 2025",
    slug: "avenir-intelligence-artificielle-2025",
    excerpt: "Découvrez les tendances qui vont révolutionner le monde de l'IA et transformer nos façons de travailler.",
    category: "tech",
    tags: ["IA", "Innovation", "Tech"],
    author: {
      name: "Sophie Martin",
      role: "CEO & Fondatrice",
      avatar: "SM",
      bio: "Passionnée par l'innovation technologique avec plus de 15 ans d'expérience.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "15 Oct 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    likes: 247,
    views: 1250
  },
  {
    id: 2,
    title: "Comment transformer votre entreprise avec le digital",
    slug: "transformer-entreprise-digital",
    excerpt: "Les clés pour réussir votre transformation digitale et rester compétitif.",
    category: "business",
    tags: ["Digital", "Stratégie", "Business"],
    author: {
      name: "Thomas Dubois",
      role: "CTO",
      avatar: "TD",
      bio: "Expert en transformation digitale.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "12 Oct 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    likes: 189,
    views: 890
  },
  {
    id: 3,
    title: "Les principes du design thinking moderne",
    slug: "principes-design-thinking-moderne",
    excerpt: "Apprenez à créer des expériences utilisateur exceptionnelles.",
    category: "design",
    tags: ["UX", "Design", "Créativité"],
    author: {
      name: "Marie Laurent",
      role: "Directrice Design",
      avatar: "ML",
      bio: "Spécialiste UX/UI passionnée.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "10 Oct 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    likes: 156,
    views: 720
  },
  {
    id: 4,
    title: "Cloud Computing : Guide complet pour débutants",
    slug: "cloud-computing-guide-complet",
    excerpt: "Tout ce que vous devez savoir sur le cloud computing.",
    category: "tech",
    tags: ["Cloud", "Infrastructure", "DevOps"],
    author: {
      name: "Lucas Bernard",
      role: "Lead Developer",
      avatar: "LB",
      bio: "Spécialiste React et architectures modernes.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "8 Oct 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    likes: 203,
    views: 1100
  },
  {
    id: 5,
    title: "Innovation : 5 méthodes pour stimuler la créativité",
    slug: "innovation-methodes-creativite",
    excerpt: "Des techniques éprouvées pour libérer le potentiel créatif de vos équipes.",
    category: "innovation",
    tags: ["Innovation", "Créativité", "Management"],
    author: {
      name: "Emma Rousseau",
      role: "Responsable Marketing",
      avatar: "ER",
      bio: "Stratège digitale et growth hacker.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "5 Oct 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    likes: 167,
    views: 780
  },
  {
    id: 6,
    title: "Cybersécurité : Protégez votre entreprise en 2025",
    slug: "cybersecurite-protegez-entreprise",
    excerpt: "Les meilleures pratiques pour sécuriser vos données.",
    category: "tech",
    tags: ["Sécurité", "Tech", "Protection"],
    author: {
      name: "Antoine Petit",
      role: "Chef de Projet",
      avatar: "AP",
      bio: "Expert en méthodologies agiles.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    date: "3 Oct 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    likes: 221,
    views: 1050
  }
];

// ============================================
// Fonctions utilitaires
// ============================================

/**
 * Récupère les articles par catégorie
 */
export const getPostsByCategory = (category) => {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};

/**
 * Récupère un article via son slug
 */
export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

/**
 * Récupère un article via son ID
 */
export const getPostById = (id) => {
  return blogPosts.find((post) => post.id === id);
};

/**
 * Récupère des articles similaires (même catégorie)
 */
export const getRelatedPosts = (currentPostId, limit = 3) => {
  const currentPost = getPostById(currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPostId && post.category === currentPost.category
    )
    .slice(0, limit);
};

// Export par défaut (facultatif mais pratique)
export default blogPosts;
