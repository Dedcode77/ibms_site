import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Pages principales
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import FormationsPage from "../pages/FormationsPage"; // Tu peux supprimer si tu veux utiliser directement FormationsList
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";
import NotFoundPage from "../pages/NotFoundPage";

// Composants pour les formations
import FormationsList from "../components/formations/FormationsList/FormationsList";
import FormationDetail from "../components/formations/FormationDetail/FormationDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Liste des formations */}
        <Route path="/formations" element={<FormationsList />} />

        {/* Détail d'une formation */}
        <Route path="/formations/:id" element={<FormationDetail />} />

        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
