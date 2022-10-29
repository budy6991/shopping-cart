import React from "react";

export const Card = ({ title, price, image, id }) => {
  return (
    <button className="w-1/6 m-6  text-spot-color rounded-xl flex flex-col justify-between items-center shadow-xl shadow-gray-800 transition-all hover:scale-105 hover:shadow-gray-300 hover:shadow-sm bg-stone-800 hover:border-spot-color hover:border-2  ">
      <div className="p-6 ">
        <img
          className="h-fit w-fit object-fill aspect-square"
          src={image}
        ></img>
      </div>
      <div className="text-center font-main-title">
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
