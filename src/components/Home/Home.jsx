import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { toast } from "react-hot-toast";





const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handelAddToCart = (tshirt) => {
    // ai jinish ta confusion 
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
     toast('you have already added this t-shirt ')
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handelRemoveFromCart = (id) => {
    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handelAddToCart={handelAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
