import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveFromCart }) => {
  return (
    <div className="order-container">
          <h2>Order Summary: {cart.length}</h2>
          {
              cart.length === 0 ? <span>buy the t-shirt</span> : <span>thanks for buy</span>
          }

      {cart.map((tshirt) => (
          <h3
              key={tshirt._id}
              
          >{tshirt.name} <button onClick={() => handelRemoveFromCart(tshirt._id)}>X</button></h3>
      ))}
    </div>
  );
};

export default Cart;
