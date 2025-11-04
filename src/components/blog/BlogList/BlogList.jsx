import React, { useState } from "react";
import { blogPosts, getPostsByCategory } from "../../../data/blogPosts"; // ✅ Corrige le chemin si besoin
import { Link } from "react-router-dom";

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = [
    { id: "all", label: "Tous" },
    { id: "tech", label: "Technologie" },
    { id: "business", label: "Business" },
    { id: "design", label: "Design" },
    { id: "innovation", label: "Innovation" },
  ];

  const filteredPosts = getPostsByCategory(activeCategory);
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section className="relative py-24 px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* === Titre === */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nos articles de blog
        </h2>
        <p className="text-gray-600">
          Découvrez nos dernières publications et insights sur la technologie, le design et l’innovation.
        </p>
      </div>

      {/* === Filtres de catégories === */}
      <div className="flex justify-center flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setVisiblePosts(6);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* === Grille des articles === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post, index) => (
          <article
            key={post.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* ✅ Correction : ton data a `image` et non `featuredImage` */}
            <div className="relative overflow-hidden h-56">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {post.readTime}
                </span>
              </div>

              {/* Lien vers l’article */}
              <div className="mt-6">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Lire l’article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* === Bouton "Charger plus" === */}
      {hasMore && (
        <div className="mt-16 text-center">
          <button
            onClick={loadMorePosts}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            Charger plus d’articles
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogList;
