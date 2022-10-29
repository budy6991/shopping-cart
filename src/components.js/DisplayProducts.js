import React from "react";
import { Card } from "./Card";

export const DisplayProducts = ({ products }) => {
  const displayAll = products.map((product) => {
    return (
      <Card
        title={product.title}
        image={product.image}
        price={product.price}
        id={product.id}
        key={product.id}
      />
    );
  });
  return (
    <div className="flex flex-wrap gap-10 w-fit h-fit justify-center">
      {displayAll}
    </div>
  );
};
