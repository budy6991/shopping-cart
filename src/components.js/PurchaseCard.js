import React from "react";

export const PurchaseCard = ({ title, image, price, id, key, quantity }) => {
  return (
    <>
      <button className="w-1/6 m-6  text-spot-color rounded-xl flex flex-col justify-between items-space-evenly shadow-xl shadow-gray-800 transition-all hover:scale-105 hover:shadow-gray-300 hover:shadow-sm bg-stone-800 hover:border-spot-color hover:border-2">
        <div className="p-6 ">
          <img
            className="h-fit w-fit object-fill aspect-square"
            src={image}
          ></img>
        </div>
        <div className="m-4 font-apple ">
          <div>
            <h2>{title}</h2>
          </div>
          <div className="m-5 text-xl font-title-font">
            <h2>Total: {price}$</h2>
          </div>
          <div className="m-5 text-l font-title-font">
            <h2>Quantity: {quantity}</h2>
          </div>
          <div className="flex justify-around font-title-font text-xl">
            <button>-</button>
            <button className="hover:bg-red-700 hover:text-black hover:rounded-full p-1">
              Remove
            </button>
            <button>+</button>
          </div>
        </div>
      </button>
    </>
  );
};
