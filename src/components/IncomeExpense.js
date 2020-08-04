import React, { useContext } from "react";
import CountUp from "react-countup";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transcations } = useContext(GlobalContext);
  const amounts = transcations.map((transcation, i) => transcation.amount);
  const income = amounts
    .filter((item, i) => item > 0)
    .reduce((previousValue, currentValue) => (previousValue += currentValue), 0)
    .toFixed(2);

  const expenses = amounts
    .filter((item, i) => item < 0)
    .reduce((previousValue, currentValue) => (previousValue += currentValue), 0)
    .toFixed(2);

  return (
    <div style={{ display: "flex" }}>
      <div className="row">
        <div className=" s12 m5">
          <div className="card-panel teal #f5f5f5 grey lighten-4">
            <h5>Income</h5>
            <h6 className="#009688 teal-text">
              $<CountUp end={Number(income)} separator="," duration={0.25} />
            </h6>
          </div>
        </div>
      </div>
      <div className="s12 m5">
        <div className="card-panel #f5f5f5 grey lighten-4">
          <h5>Expense</h5>
          <h6 className="#f44336 red-text ">
            $
            <CountUp end={Number(expenses)} separator="," duration={0.25} />
          </h6>
        </div>
      </div>
    </div>
  );
};
