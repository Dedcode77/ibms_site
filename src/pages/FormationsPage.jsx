import React from "react";
import FormationsList from "../components/formations/FormationsList";
import FormationCategories from "../components/formations/FormationCategories";

const FormationsPage = () => {
  return (
    <main>
      <FormationCategories />
      <FormationsList />
    </main>
  );
};

export default FormationsPage;
