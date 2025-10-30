import React from "react";
import AppRoutes from "./routes/appRoutes";
import Header from "./components/layout/Header/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Header />
      <main className="mt-20">
        <AppRoutes />
      </main>
      <footer className="mt-20 p-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} IBMS — Tous droits réservés
      </footer>
    </div>
  );
}
