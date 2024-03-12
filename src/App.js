import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function performOperation(operation) {
    const inputValue = Number(inputRef.current.value);

    if (isNaN(inputValue)) {
      alert("Please enter a valid number.");
      return;
    }

    switch (operation) {
      case "add":
        setResult((result) => result + inputValue);
        break;
      case "subtract":
        setResult((result) => result - inputValue);
        break;
      case "multiply":
        setResult((result) => result * inputValue);
        break;
      case "divide":
        if (inputValue === 0) {
          alert("Cannot divide by zero.");
          return;
        }
        setResult((result) => result / inputValue);
        break;
      default:
        break;
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <p ref={resultRef}>
          {/* add the value of the current total */}
          {result.toFixed(2)} {/* Format result to 2 decimal places */}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        {/* Add the addition button */}
        <button onClick={() => performOperation("add")}>add</button>
        {/* Add the subtract button */}
        <button onClick={() => performOperation("subtract")}>subtract</button>
        {/* Add the multiply button */}
        <button onClick={() => performOperation("multiply")}>multiply</button>
        {/* Add the divide button */}
        <button onClick={() => performOperation("divide")}>divide</button>
        {/* Add the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;