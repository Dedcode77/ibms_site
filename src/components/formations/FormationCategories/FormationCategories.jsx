// src/components/formations/FormationCategories.jsx
import React from "react";

const categories = ["Toutes", "Développement", "Marketing", "Design"];

const FormationCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeCategory === category
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FormationCategories;
