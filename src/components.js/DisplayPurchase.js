import React from "react";
import { PurchaseCard } from "./PurchaseCard";

export const DisplayPurchase = ({ cart, editAdd, remove }) => {
  console.log(cart);
  const displayAll = cart.map((item) => {
    console.log(item.id);
    return (
      <PurchaseCard
        title={item.productTitle}
        quantity={item.quantity}
        image={item.productImage}
        price={item.productPrice}
        totalPrice={item.totalPrice}
        id={item.productId}
        key={item.productId}
        editAdd={editAdd}
        remove={remove}
      />
    );
  });
  return <div className="h-fit w-full flex">{displayAll}</div>;
};
