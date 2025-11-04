import React from "react";

const Badge = ({
  label = "Nouveau",
  color = "blue",
  size = "md",
  variant = "solid", // solid | outline | soft
}) => {
  // Styles dynamiques selon la couleur et le type
  const colorClasses = {
    blue: {
      solid: "bg-blue-600 text-white",
      outline: "border border-blue-500 text-blue-500",
      soft: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    },
    green: {
      solid: "bg-green-600 text-white",
      outline: "border border-green-500 text-green-500",
      soft: "bg-green-500/10 text-green-400 border border-green-500/20",
    },
    red: {
      solid: "bg-red-600 text-white",
      outline: "border border-red-500 text-red-500",
      soft: "bg-red-500/10 text-red-400 border border-red-500/20",
    },
    purple: {
      solid: "bg-purple-600 text-white",
      outline: "border border-purple-500 text-purple-500",
      soft: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    },
    cyan: {
      solid: "bg-cyan-600 text-white",
      outline: "border border-cyan-500 text-cyan-500",
      soft: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    },
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`inline-block rounded-full font-medium tracking-wide transition-all duration-300 ${colorClasses[color][variant]} ${sizeClasses[size]} hover:scale-105`}
    >
      {label}
    </span>
  );
};

export default Badge;
