import React, { useState, useEffect } from "react";
import BeanLogo from "../img/new-logo-with-3d-look2.png";
import { useSpring, animated } from "react-spring";

const LandingSection = () => {
  // Set state for visibility
  const [isVisible, setIsVisible] = useState(true);

  // Spring animation based on visibility
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: { mass: 1, tension: 210, friction: 20 },
  });

  // Effect for adding and removing the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos < 100; // Determines when the component should be visible
      setIsVisible(visible);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div className="LandingSection" style={animation}>
      <div className="container">
        <div className="img-wrapper">
          <img src={BeanLogo} alt="Jelly Belly Wiki Logo" />
        </div>
        <div>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h2>A Rainbow of Flavors Awaits!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias enim
            maxime placeat tenetur deserunt adipisci laborum perferendis
            incidunt aspernatur. Ex.
          </p>
          <a className="btn" href="http://">
            Click here for more info
          </a>
        </div>
      </div>
      {/* <div className="model-3d">3D model</div> */}
    </animated.div>
  );
};

export default LandingSection;
