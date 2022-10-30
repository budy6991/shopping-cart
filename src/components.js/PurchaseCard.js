import React, { useState, useEffect } from "react";

export const PurchaseCard = ({
  title,
  image,
  price,
  id,
  quantity,
  editAdd,
}) => {
  const [changeQuantity, setChangeQuantity] = useState(quantity);

  useEffect(() => {
    editAdd(id, changeQuantity);
  }, [changeQuantity]);

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
            <h2>Total: {price * quantity}$</h2>
          </div>
          <div className="m-5 text-l font-title-font">
            <h2>Quantity: {quantity}</h2>
          </div>
          <div className="flex justify-around font-title-font text-xl">
            <button
              className="transition-all hover:scale-125"
              onClick={() => {
                setChangeQuantity(changeQuantity - 1);
              }}
            >
              -
            </button>
            <button className="hover:bg-red-900 hover:text-white hover:rounded-full p-1 hover:shadow-md hover:shadow-black">
              Remove
            </button>
            <button
              className="transition-all hover:scale-125"
              onClick={() => {
                setChangeQuantity(changeQuantity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </button>
    </>
  );
};
