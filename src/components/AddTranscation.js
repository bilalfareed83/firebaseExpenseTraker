import React, { useContext, useState } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";
import M from "materialize-css";

export const AddTranscation = () => {
  const { addTranscation } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      return M.toast({
        html: "require text field!",
        classes: "#ff1a1a red darken-3",
      });
    }
    if (!amount) {
      return M.toast({
        html: "add amount!",
        classes: "#ff1a1a red darken-3",
      });
    }

    const newTranscation = {
      id: Math.random(Math.floor() * 10000),
      text,
      amount: +amount,
    };
    addTranscation(newTranscation);

    const setConst = () => {
      setText("");
      setAmount("");
    };

    setConst();
  };

  return (
    <>
      <h6>Add new transaction</h6>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix ">arrow_forward</i>
              <input
                id="icon_prefix"
                type="text"
                value={text}
                className="validate"
                onChange={(e) => setText(e.target.value)}
              />
              <label htmlFor="icon_prefix">Add text here</label>
            </div>
            <div className="input-field col s6 ">
              <i className="material-icons prefix ">attach_money</i>
              <input
                id="icon_telephone"
                type="number"
                value={amount}
                className="validate"
                onChange={(e) => setAmount(e.target.value)}
              />
              <label htmlFor="icon_telephone">Enter amount</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light #01579b light-blue darken-4"
            type="submit"
            name="action"
            onClick={onSubmit}
          >
            Add Transcation
            <i className="material-icons right">add</i>
          </button>
        </form>
      </div>
    </>
  );
};
