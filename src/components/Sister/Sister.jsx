import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext)
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>sister</h3>
            <p>{ring}</p>
            <p><small>grandpa money: {money}</small></p>
        </div>
    );
};

export default Sister;