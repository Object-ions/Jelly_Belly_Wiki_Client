import React from "react";
import InformativeSection from "../InformativeSection";
import LandingSection from "../LandingSection";
import DisplayHistory from "../DisplayHistory";
import Display3D from "../Display3D";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <Display3D />
      <DisplayHistory />
      <InformativeSection />
    </>
  );
};

export default DisplayControl;
