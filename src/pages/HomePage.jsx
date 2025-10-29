import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";
import Partners from "../components/home/Partners";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <CTA />
      <Partners />
    </>
  );
};

export default HomePage;
