import React, { useState } from "react";
import Result from "./Result";
import "./Tracker.css";
import Transaction from "./Transaction";

function Tracker() {
  const [mode, setMode] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setMode(!mode);
  };

  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };

  /* const [state, setState] = useState("Add Transaction")
    const handleTransaction = () => {
        setState(props.toggleButton)
    } */

  const handleTransactionChange = (e) => {
    setNumber(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (number.trim() === "") {
      return;
    }
    if (text.trim() === "") {
      return;
    }
    setItems([text, number, ...items]);
    setNumber(" ");
    setText(" ");
  };
  console.log(number);
  console.log(items);
  return (
    <div
      className="main-content"
      style={{ backgroundColor: `${mode ? "white" : "black"}` }}>
      <button onClick={handleClick}>Toggle</button>
      <div style={{ color: `${mode ? "black" : "white"}` }}>
        {/*  <h1>{mode ? "ON" : "OFF"}</h1> */}
        <h2>Expense Tracker</h2>

        <div className="main-balance">
          <h3>Balance:$0</h3>
          <button
            onClick={handleToggle}
            style={{
              backgroundColor: `${mode ? "black" : "white"}`,
              color: `${mode ? "white" : "black"}`,
              textTransform: "uppercase"
            }}>
            {toggleButton ? "Cancel" : "Add"}
          </button>
        </div>

        {toggleButton ? (
          <form onSubmit={handleSubmit} className="main-transaction">
            <input
              onChange={handleTransactionChange}
              value={number}
              placeholder="Amount"
              style={{
                width: "90%",
                padding: "4px 10px",
                height: "28px",
                border: "1px solid lightgray",
                outline: "0",
                borderRadius: "4px"
              }}
              type="number"
            />
            <br />
            <input
              onChange={handleTextChange}
              value={text}
              placeholder="Description"
              style={{
                width: "90%",
                height: "28px",
                marginTop: "10px",
                padding: "4px 10px",
                border: "1px solid lightgray",
                outline: "0",
                borderRadius: "4px"
              }}
              type="text"
            />
            <br />
            <div
              className="tracker-radio" /* onChange={this.setGender.bind(this)} */
            >
              <input
                type="radio"
                defaultChecked
                value="Expense"
                name="amount"
              />{" "}
              Expense
              <input type="radio" value="Income" name="amount" /> Income
            </div>
            <button /* onClick={props.handleToggle} */>Add Transaction</button>
          </form>
        ) : null}

        <Transaction />
        <Result items={items} />
      </div>
    </div>
  );
}

export default Tracker;
