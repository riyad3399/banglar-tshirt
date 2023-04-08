import React, { useContext } from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = ({ ring }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>father</h3>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>send 1000tk</button>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;