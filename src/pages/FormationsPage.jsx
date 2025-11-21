import React from "react";
import FormationsList from "../components/formations/FormationsList/FormationsList";

const FormationsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Nos Formations</h1>
      <FormationsList />
    </div>
  );
};

export default FormationsPage;
