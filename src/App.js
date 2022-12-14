import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Footer } from "./components.js/Footer";
import { Home } from "./components.js/Home";
import { NavBar } from "./components.js/NavBar";
import { ProductPage } from "./components.js/ProductPage";
import { Shop } from "./components.js/Shop";
import { ShoppingCart } from "./components.js/ShoppingCart";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleShoppingCart = (product) => {
    setCart(cart.concat(product));
  };

  const handleEditAdd = (id, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.productId === id) {
          item.quantity = quantity;
          item.totalPrice += item.price;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const getTotalPrice = () => {
      setTotalPrice(
        cart.reduce((accumulator, item) => {
          return (accumulator += item.productPrice * item.quantity);
        }, 0)
      );
    };
    getTotalPrice();
  }, [cart]);

  const handleRemove = (id) => {
    setCart(
      cart.filter((item) => {
        return item.productId != id;
      })
    );
  };

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
    <div className="w-screen h-full bg-main-color flex flex-col justify-between">
      <Router basename="/shopping-cart">
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop products={products} />} />
          <Route
            path="shop/:productId"
            element={
              <ProductPage
                products={products}
                handleShoppingCart={handleShoppingCart}
                shoppingCart={cart}
              />
            }
          />
          <Route
            path="cart"
            element={
              <ShoppingCart
                cart={cart}
                editAdd={handleEditAdd}
                remove={handleRemove}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
