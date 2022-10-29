import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Footer } from "./components.js/Footer";
import { Home } from "./components.js/Home";
import { NavBar } from "./components.js/NavBar";
import { Shop } from "./components.js/Shop";
import { ShoppingCart } from "./components.js/ShoppingCart";
import React from "react";

function App() {
  return (
    <div className="w-screen h-screen bg-main-color font-main-font flex flex-col justify-between">
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
