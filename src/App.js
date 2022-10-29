import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Footer } from "./components.js/Footer";
import { Home } from "./components.js/Home";
import { NavBar } from "./components.js/NavBar";
import { Shop } from "./components.js/Shop";
import { ShoppingCart } from "./components.js/ShoppingCart";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-full bg-main-color font-main-font flex flex-col justify-between">
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop products={products} />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
