import React, { useState } from "react";
import Result from "./Result";
import "./Transaction.css";

function Transaction(props) {
  return (
    <div>
      <div className="main-expense">
        <div className="main-expense-class">
          <div>
            Expense
            <span
              style={{ color: "green", fontSize: "large" }}
              className="main-expense-span">
              $0
            </span>
          </div>
        </div>
        <div className="main-expense-class">
          <div>
            Income
            <span
              style={{ color: "red", fontSize: "large" }}
              className="main-expense-span">
              $0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
