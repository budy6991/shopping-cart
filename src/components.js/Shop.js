import React from "react";
import { DisplayProducts } from "./DisplayProducts";

export const Shop = ({ products }) => {
  return (
    <div className="w-screen h-full flex justify-center">
      <DisplayProducts products={products} />
    </div>
  );
};
