import React, { useEffect } from "react";
import { DisplayPurchase } from "./DisplayPurchase";
import { useState } from "react";

export const ShoppingCart = ({ cart, editAdd, remove, totalPrice }) => {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <div className="w-full overflow-x-scroll flex-wrap p-6 self-start">
        <DisplayPurchase cart={cart} editAdd={editAdd} remove={remove} />
      </div>
      <div className="text-white text-3xl p-4 shadow-inner  shadow-blue-900 w-fit self-center font-title-font flex flex-col items-center rounded-xl">
        <div>Total: {totalPrice}</div>
        <button className="hover:bg-blue-900 hover:rounded-full p-2 hover:shadow-md hover:shadow-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};
