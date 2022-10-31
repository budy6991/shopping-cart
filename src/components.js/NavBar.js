import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ cart }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const quantity = cart.reduce(
    (total, currentValue) => (total = total + currentValue.quantity),
    0
  );

  useEffect(() => {
    setItems(quantity);
  }, [quantity]);

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
      <div className=" font-title-font flex">
        <button
          onClick={() => navigate("cart")}
          className="hover:underline hover:underline-offset-8 decoration-4 font-title-font bg-contain"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <button className="bg-white text-black rounded-full text-sm p-2 ml-2">
          {items}
        </button>
      </div>
    </nav>
  );
};
