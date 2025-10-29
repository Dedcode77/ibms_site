import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oups 😅 Page non trouvée.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Retour à l’accueil
      </Link>
    </section>
  );
};

export default NotFoundPage;
