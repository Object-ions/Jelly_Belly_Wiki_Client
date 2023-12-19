import React from "react";
import LandingSection from "../LandingSection";
import ExampleBean from "../ExampleBean";
import ExampleHistory from "../ExampleHistory";
import DisplayAbout from "../pages/DisplayAbout";
import ExampleFact from "../ExampleFact";
import SplineViewer from "../SplineViewer";
import { Parallax } from "react-scroll-parallax";
import Contact from "../Contact";
import ExampleRecipe from "../ExampleRecipe";
import ExampleCombination from "../ExampleCombination";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <DisplayAbout />
      <ExampleHistory />
      <ExampleBean />
      <ExampleFact />
      <ExampleRecipe />
      <ExampleCombination />
      <Contact />

      {/* <SplineViewer url="https://prod.spline.design/mjbobhqsR1jJBonF/scene.splinecode" /> */}
    </>
  );
};

export default DisplayControl;
