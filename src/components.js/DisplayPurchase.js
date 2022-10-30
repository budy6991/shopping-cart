import React from "react";
import { PurchaseCard } from "./PurchaseCard";

export const DisplayPurchase = ({ cart }) => {
  console.log(cart);
  const displayAll = cart.map((item) => {
    return (
      <PurchaseCard
        title={item.productTitle}
        quantity={item.quantity}
        image={item.productImage}
        price={item.totalPrice}
        id={item.id}
        key={item.id}
      />
    );
  });
  return <div className="h-fit w-fit flex">{displayAll}</div>;
};
