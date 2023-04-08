import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>friend</h3>
            {/* <p><small>Ring: {ring}</small></p> */}
            {ring && <p><small>Ring: Daimond</small></p>}
        </div>
    );
};

export default Friend;