import React, { useContext } from "react";
import CountUp from "react-countup";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";

export const Balance = () => {
  const { transcations } = useContext(GlobalContext);
  const amounts = transcations.map((transcation) => transcation.amount);
  const total = amounts
    .reduce((previousValue, currentValur) => (previousValue += currentValur), 0)
    .toFixed(2);
  return (
    <div>
      <h6>Your Balnce</h6>
      <h4 className={total < 0 ? "balanceMin" : null}>
        $<CountUp end={Number(total)} duration={0.25} separator="," />
      </h4>
    </div>
  );
};
