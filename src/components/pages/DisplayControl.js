import React from "react";
import InformativeSection from "../InformativeSection";
import LandingSection from "../LandingSection";
import DisplayHistory from "../DisplayHistory";
import About from "../About";
import DisplayFact from "./DisplayFact";
import SplineViewer from "../SplineViewer";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <About />
      <DisplayHistory />
      <InformativeSection />
      <DisplayFact />

      {/* <SplineViewer url="https://prod.spline.design/mjbobhqsR1jJBonF/scene.splinecode" /> */}
    </>
  );
};

export default DisplayControl;
