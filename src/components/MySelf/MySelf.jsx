import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h3>myself</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;