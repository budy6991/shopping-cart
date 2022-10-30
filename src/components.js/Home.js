import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center font-title-font text-gray-400 text-9xl">
      <button
        onClick={() => navigate("/shop")}
        className="transition-all duration-500 hover:scale-125"
      >
        SHOP
      </button>
    </div>
  );
};
