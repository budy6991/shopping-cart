import React from "react";

export const Card = ({ title, price, image, id }) => {
  return (
    <button className="w-1/6 m-6 border-spot-color border-2 text-spot-color rounded-xl flex flex-col justify-between items-center shadow-xl shadow-gray-800 transition-all hover:scale-105 hover:shadow-gray-300 hover:shadow-sm bg-neutral-900">
      <div className="p-6 ">
        <img src={image}></img>
      </div>
      <div className="text-center">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <h2>Price: {price}</h2>
        </div>
      </div>
    </button>
  );
};
