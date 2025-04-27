import { useState } from "react";
import "./simple.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "Clear") return setInput("");
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "1", "2", "3", "-", 
    "4", "5", "6", "+", 
    "7", "8", "9", "*", 
    "0", ".", "=", "/"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1 className="title">Simple Calculator</h1>
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons-grid">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)} className="button">
              {btn}
            </button>
          ))}
          <button onClick={() => handleClick("Clear")} className="button clear-button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
