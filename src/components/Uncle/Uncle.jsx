import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ ring }) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>uncle</h3>
            <p><small>grandpa money: {money}</small></p>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;