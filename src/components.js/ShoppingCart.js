import React from "react";
import { DisplayPurchase } from "./DisplayPurchase";

export const ShoppingCart = ({ cart, edit }) => {
  return (
    <div className="w-screen h-screen ">
      <h1 className="text-center text-2xl font-title-font text-gray-400">
        SHOPPING CART
      </h1>
      <DisplayPurchase cart={cart} edit={edit} />
    </div>
  );
};
