import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const ProductPage = ({ products, handleShoppingCart }) => {
  const params = useParams();
  const productId = Number(params.productId);
  let product = products.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const navigate = useNavigate();

  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const substractProduct = () => {
    setQuantity(quantity - 1);
  };

  const handleSubmit = () => {
    handleShoppingCart({ quantity, totalPrice, productId });
  };

  useEffect(() => {
    const handleUpdate = () => {
      setTotalPrice(quantity * product.price);
    };
    handleUpdate();
  }, [quantity]);

  return (
    <div className="w-screen h-screen flex p-6 justify-center text-white gap-10">
      <div className="w-fit h-fit flex flex-col items-center gap-10">
        <div className="w-4/6">
          <div className="font-title-font text-3xl mb-6 text-center">
            <h2>{product.title}</h2>
          </div>
          <img src={product.image} className="rounded-xl " />
        </div>
        <div className="font-title-font text-3xl">
          <h2>Price {product.price}$</h2>
        </div>
        <div className="font-title-font text-xl">
          <h2>Opinions: {product.rating.rate}/5 </h2>
        </div>
      </div>
      <div className="w-1/2 h-3/5 flex flex-col justify-evenly items-center">
        <h1 className="text-justify">{product.description}</h1>
        <div className="w-3/5 flex justify-around font-title-font text-5xl">
          <button
            onClick={() => {
              substractProduct();
            }}
          >
            -
          </button>
          <h2>{quantity}</h2>
          <button
            onClick={() => {
              addProduct();
            }}
          >
            +
          </button>
        </div>
        <button
          className="font-title-font hover:text-black hover:bg-white p-3 rounded-full"
          onClick={() => {
            handleSubmit();
            navigate("/shop");
          }}
        >
          ADD TO CART
        </button>
      </div>
      <div className="h-1/2 w-1/4 flex justify-center flex-col m-10 g-8 font-title-font">
        <h1 className="text-center self-center my-6">TOTAL</h1>
        <h1 className="text-center self-center my-6 text-3xl">
          {" "}
          {totalPrice}$
        </h1>
      </div>
    </div>
  );
};
