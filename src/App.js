import MainNavbar from "./components/MainNavbar/MainNavbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import ProductDetails from "./components/Pages/ProductDetails";
import CreateReview from "./components/Pages/CreateReview";
import Guides from "./components/Pages/Guides";
import Guide from "./components/Pages/Guide";
import CreateGuide from "./components/Pages/CreateGuide";
import { useState } from "react";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const updateLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <MainNavbar lang={currentLanguage} updateLanguage={updateLanguage} />

      <Routes>
        <Route path="/" element={<Home lang={currentLanguage} />} />
        <Route path="/shop/:section" element={<Shop />} />
        <Route path="/shop/details/:id" element={<ProductDetails />} />
        <Route path="/shop/details/review/:id" element={<CreateReview />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/guide/:id" element={<Guide />} />
        <Route path="/guides/create" element={<CreateGuide />} />
      </Routes>
    </div>
  );
}

export default App;
