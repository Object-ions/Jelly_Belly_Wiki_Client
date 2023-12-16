import React from "react";
import InformativeSection from "../InformativeSection";
import LandingSection from "../LandingSection";
import DisplayHistory from "../DisplayHistory";
import About from "../About";
import SplineViewer from "../SplineViewer";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <DisplayHistory />
      <InformativeSection />
      {/* <SplineViewer url="https://prod.spline.design/mjbobhqsR1jJBonF/scene.splinecode" /> */}
      <About />
    </>
  );
};

export default DisplayControl;
