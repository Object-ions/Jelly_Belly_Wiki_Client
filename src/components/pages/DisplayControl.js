import React from "react";
import LandingSection from "../LandingSection";
import ExampleBean from "../ExampleBean";
import ExampleHistory from "../ExampleHistory";
import DisplayAbout from "../pages/DisplayAbout";
import ExampleFact from "../ExampleFact";
import Contact from "../Contact";
import ExampleRecpComb from "../ExampleRecpComb";

const DisplayControl = () => {
  return (
    <>
      <LandingSection />
      <DisplayAbout />
      <ExampleHistory />
      <ExampleBean />
      <ExampleFact />
      <ExampleRecpComb />
      <Contact />
    </>
  );
};

export default DisplayControl;
