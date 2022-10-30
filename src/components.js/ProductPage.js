import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const ProductPage = ({ products }) => {
  const params = useParams();
  const productId = params.productId;

  const found = products.find((product) => (product.id = productId));
  console.log(found);

  return (
    <div className="w-screen h-screen text-white text-5xl asfasdfasdff">
      Hola buenas tardes me cago en la madre que me ha parido {productId}
    </div>
  );
};
