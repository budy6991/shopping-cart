import React from "react";
import { Card } from "./Card";
import { Outlet } from "react-router-dom";

export const DisplayProducts = ({ products }) => {
  const displayAll = products.map((product) => {
    return (
      <Card
        title={product.title}
        image={product.image}
        price={product.price}
        id={product.id}
        key={product.id}
        cardName="ProductsCards"
      />
    );
  });
  return (
    <div className="flex flex-wrap gap-10 w-fit h-fit justify-center">
      {displayAll}
    </div>
  );
};
