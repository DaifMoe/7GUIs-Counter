import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  // Counter's initial state is set to 0
  const [counter, setCounter] = useState(0);
  const [changeAmount, setChangeAmount] = useState(1);

  // Increment or Decrement by any value the user chooses
  const handleAmountChange = (event: any) => {
    setChangeAmount(Number(event.target.value));
  };

  // Function is called everytime the increment button is clicked by the user
  const incrementClick = () => {
    // Counter's previous state is now incremented by 1
    setCounter(counter + changeAmount);
  };
  // Function is called everytime the decrement button is clicked by the user
  const decrementClick = () => {
    // Counter's previous state is now decremented by 1
    setCounter(counter - changeAmount);
  };
  // Function is called everytime the reset button is clicked by the user
  const resetClick = () => {
    // Counter's previous state us reset to the initial state of zero
    setCounter(0);
  };
  return (
    <div id="wrapper">
      <div id="count">
        <label id="countTitle">Count</label>
        <input disabled id="email" value={counter} />
        <input
          id="countByValue"
          type="number"
          value={changeAmount}
          onChange={handleAmountChange}
        />
        <div id="buttons">
          <button id="incrementButton" onClick={incrementClick}>
            Increment
          </button>
          <button id="decrementButton" onClick={decrementClick}>
            Decrement
          </button>
          <button id="resetButton" onClick={resetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
