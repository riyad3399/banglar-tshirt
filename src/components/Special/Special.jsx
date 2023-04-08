import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
const angti = useContext(RingContext)
    return (
        <div>
            <h3>special</h3>
            {/* <p><small>Rinag: {ring}</small></p> */}
            <p>{angti}</p>
        </div>
    );
};

export default Special;