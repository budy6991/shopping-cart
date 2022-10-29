import React from "react";

export const Card = ({ title, price, image, id }) => {
  return (
    <div className="w-1/6">
      <div>
        <img src={image}></img>
      </div>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </div>
  );
};
