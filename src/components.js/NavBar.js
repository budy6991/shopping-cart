import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-fit text-spot-color p-7 flex justify-between text-xl ">
      <button
        onClick={() => navigate("/")}
        className="hover:underline hover:underline-offset-8 decoration-4 font-title-font"
      >
        Home
      </button>
      <button
        onClick={() => navigate("shop")}
        className="hover:underline hover:underline-offset-8 decoration-4 font-title-font text-4xl"
      >
        THE VINTAGE STORE
      </button>
      <button
        onClick={() => navigate("shopping-cart")}
        className="hover:underline hover:underline-offset-8 decoration-4 font-title-font"
      >
        Cart
      </button>
    </nav>
  );
};
