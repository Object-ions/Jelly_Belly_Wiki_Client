import React from "react";
import LandingSection from "../LandingSection";
import ExampleBean from "../ExampleBean";
import ExampleHistory from "../ExampleHistory";
import About from "../About";
import ExampleFact from "../ExampleFact";
import SplineViewer from "../SplineViewer";
import { Parallax } from "react-scroll-parallax";
import Contact from "../Contact";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <About />
      <ExampleHistory />
      <ExampleBean />
      <ExampleFact />
      <Contact />

      {/* <SplineViewer url="https://prod.spline.design/mjbobhqsR1jJBonF/scene.splinecode" /> */}
    </>
  );
};

export default DisplayControl;
