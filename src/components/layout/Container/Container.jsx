import React from "react";

/**
 * Composant Container
 * Sert de wrapper pour centrer et limiter la largeur du contenu.
 * 
 * Props :
 * - children : contenu à afficher à l’intérieur
 * - className : styles supplémentaires
 * - size : "sm" | "md" | "lg" | "xl" (largeur maximale)
 */
const Container = ({ children, className = "", size = "lg" }) => {
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
