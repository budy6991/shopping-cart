import React, { useEffect } from "react";
import { DisplayPurchase } from "./DisplayPurchase";
import { useState } from "react";

export const ShoppingCart = ({ cart, editAdd, remove, totalPrice }) => {
  return (
    <div className="w-screen h-screen flex justify-between">
      <div>
        <DisplayPurchase cart={cart} editAdd={editAdd} remove={remove} />
      </div>
      <div className="text-white border-2 border-white">
        Total: {totalPrice}
      </div>
    </div>
  );
};
