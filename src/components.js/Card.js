import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, price, image, id }) => {
  const navigate = useNavigate();

  return (
    <button
      className="w-1/6 m-6  text-spot-color rounded-xl flex flex-col justify-center items-space-between shadow-xl shadow-gray-800 transition-all hover:scale-105 hover:shadow-gray-300 hover:shadow-sm bg-stone-800 hover:border-spot-color hover:border-2"
      onClick={() => navigate(`${id}`)}
    >
      <div className="p-6 ">
        <img
          className="h-fit w-fit object-fill aspect-square"
          src={image}
        ></img>
      </div>
      <div className="m-4 font-main-font">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="m-5 text-xl font-title-font">
          <h2>Price: {price}$</h2>
        </div>
      </div>
    </button>
  );
};
