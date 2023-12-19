import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DisplayControl from "./pages/DisplayControl";
import DisplayBean from "./pages/DisplayBean";
import DisplayFact from "./pages/DisplayFact";
import DisplayRecipe from "./pages/DisplayRecipe";
import DisplayApi from "./pages/DisplayApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeanCard from "./BeanCard";
import { ParallaxProvider } from "react-scroll-parallax";
import DisplayCombination from "./pages/DisplayCombination";
import RecipeCard from "./RecipeCard";
import DisplayHistory from "./pages/DisplayHistory";
import DisplayAbout from "./pages/DisplayAbout";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<DisplayControl />} />
          <Route path="/beans" element={<DisplayBean />} />
          <Route path="/beans/:beanId" element={<BeanCard />} />
          <Route path="/facts" element={<DisplayFact />} />
          <Route path="/recipes" element={<DisplayRecipe />} />
          <Route path="/recipes/:recipeId" element={<RecipeCard />} />
          <Route path="/combinations" element={<DisplayCombination />} />
          <Route path="/history" element={<DisplayHistory />} />
          <Route path="/about" element={<DisplayAbout />} />
          <Route path="/api" element={<DisplayApi />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
