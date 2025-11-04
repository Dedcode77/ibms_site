import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "../../../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl text-red-500 mb-4">Article introuvable</h2>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post.id);

  return (
    <article className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          Par <strong>{post.author.name}</strong> — {post.date} • {post.readTime}
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          {post.excerpt} (contenu complet à venir)
        </p>

        {/* Articles similaires */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Articles similaires
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug}`}
                  className="block border border-gray-100 rounded-xl hover:shadow-lg transition p-4"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-blue-800">{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/blog"
          className="inline-block mt-12 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Retour au blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
