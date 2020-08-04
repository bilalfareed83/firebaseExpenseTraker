import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";
import Transcation from "./Transcation";

export const TransationList = () => {
  const { transcations } = useContext(GlobalContext);

  return (
    <div>
      <h5>
        History
        <span>
          <i className="material-icons ">arrow_downward</i>
        </span>
        <hr />
      </h5>
      <ul className=" tabs-fixed-width tab-demo z-depth-1">
        {transcations.map((transcation, i) => (
          <Transcation transcation={transcation} key={i} />
        ))}
      </ul>
    </div>
  );
};
