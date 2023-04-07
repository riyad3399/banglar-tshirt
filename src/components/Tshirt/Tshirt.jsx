import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt }) => {
    console.log(tshirt);
    const { picture, price, name } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button className='btn-buy-now'>Buy Now</button>
        </div>
    );
};

export default Tshirt;