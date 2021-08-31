import React from "react";
import "./Result.css";

function Result(props) {
  return (
    <div className="main-result">
      <tbody className="main-result-one">
        {props.items.map((item, index) => {
          return (
            <tr className="main-result-two" key={index}>
              <td>{item}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

export default Result;
