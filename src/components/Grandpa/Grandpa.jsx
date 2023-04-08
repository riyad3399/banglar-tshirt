import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const RingContext = createContext("gold");

export const MoneyContext = createContext(0);
const Grandpa = () => {
  const [money, setMoney] = useState(0);

  const ring = "diamond";
  return (
    <div className="grandpa">
      <h1>grandpa</h1>
      <p>Dadar tk: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle ring={ring}></Uncle>
            <Aunty></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
