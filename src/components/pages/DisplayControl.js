import React from "react";
import InformativeSection from "../InformativeSection";
import LandingSection from "../LandingSection";
import DisplayHistory from "../DisplayHistory";
import About from "../About";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <DisplayHistory />
      <InformativeSection />
      <About />
    </>
  );
};

export default DisplayControl;
