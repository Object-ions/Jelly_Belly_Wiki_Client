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

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DisplayControl />} />
        <Route path="/beans" element={<DisplayBean />} />
        <Route path="/beans/:beanId" element={<BeanCard />} />
        <Route path="/facts" element={<DisplayFact />} />
        <Route path="/recipes" element={<DisplayRecipe />} />
        <Route path="/api" element={<DisplayApi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
