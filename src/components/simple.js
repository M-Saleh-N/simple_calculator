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

}

export default Calculator;
