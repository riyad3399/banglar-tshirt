import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='order-container'>
            <h2>Order Summary: {cart.length}</h2>
        </div>
    );
};

export default Cart;