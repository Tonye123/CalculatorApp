import React from "react";
import "../index.css";
import styled from "styled-components";

import Buttons from "./Buttons";
import { useState } from "react";

const StyledMainDiv = styled.div`
  max-width: 320px;
  background-color: teal;
  font-size: 2.5rem;
  padding: 15px;
  border-radius: 8px;
  margin: 2em auto;
  position: relative;

  .display {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding-right: 18px;
    background: white;
    border: 1px solid;
    min-height: 15vh;
    justify-content: flex-end;
    align-items: flex-end;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 2.5rem;
  }
`;

function App() {
  const [state, setState] = useState({
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false
  });

  const { displayValue, waitingForOperand, operator, value } = state;

  const handleDigits = e => {
    let clickedButton = e.target.value;

    if (waitingForOperand) {
  
      setState({
        ...state,
        displayValue: e.target.value,
        waitingForOperand: false
      });
    } else {
      setState({
        ...state,
        displayValue:
          displayValue === "0" ? clickedButton : displayValue + clickedButton
      });
    }
  };

  const handleDecimal = e => {
    if (displayValue.indexOf(e.target.value) !== -1) return;

    if (waitingForOperand) {
      setState({
        displayValue: ".",
        waitingForOperand: false
      });
    } else {
      setState({
        ...state,
        displayValue: displayValue + e.target.value
      });
    }
  };

  const handleClear = () => {
    setState({
      displayValue: "0"
    });
  };

  const handleToggle = () => {
    const newValue = parseFloat(displayValue) * -1;

    setState({
      displayValue: String(newValue)
    });
  };

  const handlePercent = () => {
    const value = parseFloat(displayValue);

    setState({
      displayValue: (value / 100).toString()
    });
  };

  const handleOperator = e => {
    const operatorClicked = e.target.value;

    //nextValue has the current displayValue in state
    const nextValue = parseFloat(displayValue);

    const operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue
    };

    //if no previous value
    if (value === null) {
     
      setState({
        ...state,
        value: nextValue
      });
     
    } else if (operator) {
     
      const currentValue = value || 0;

      const computedValue = operations[operator](currentValue, nextValue);



      setState({
        value: computedValue,
        displayValue: computedValue.toString(),
        waitingForOperand: true,
        operator: operatorClicked
      });
      return;
    }

    setState({
      ...state,
      value: nextValue,
      operator: operatorClicked,
      waitingForOperand: true
    });
  };

  return (
    <StyledMainDiv>
      <div className="display">
        <code>{state.displayValue}</code>
      </div>

      <Buttons
        handleDigits={handleDigits}
        handleDecimal={handleDecimal}
        handleClear={handleClear}
        handleToggle={handleToggle}
        handlePercent={handlePercent}
        handleOperator={handleOperator}
      />
    </StyledMainDiv>
  );
}

export default App;
