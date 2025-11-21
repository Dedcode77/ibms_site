// src/components/formations/FormationsList/FormationsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formations } from "../../../data/formations"; // chemin correct

const colorClasses = {
  primary: { bg: "from-blue-500 to-blue-600", text: "text-blue-600" },
  secondary: { bg: "from-green-500 to-green-600", text: "text-green-600" },
  tertiary: { bg: "from-purple-500 to-purple-600", text: "text-purple-600" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};

const FormationsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {formations.map((formation, index) => {
        const colors = colorClasses[formation.color] || colorClasses.primary;
        return (
          <motion.div
            key={formation.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={`p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300`}
          >
            <div
              className={`mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${colors.bg} text-white text-2xl`}
            >
              {formation.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
            <p className="text-gray-600 mb-4">{formation.description}</p>
            <Link
              to={`/formations/${formation.id}`}
              className={`inline-block px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${colors.bg} hover:scale-105 transition-transform`}
            >
              Voir détails
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FormationsList;
