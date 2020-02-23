import React from "react";
import styled from "styled-components";

const StyledBtnDiv = styled.div`
  max-width: 310px;
  margin: auto auto;
  padding-top: 10px;

  .dot,
  .cancel {
    position: relative;
    right: 42px;
  }

  button {
    border-radius: 50px;
    padding: 10px;
    font-size: 1.2rem;
    margin: 5px;
    width: 60px;
    height: 60px;
    outline: none;
    font-weight: 550;
    font-family: "Open Sans", sans-serif;
    background: #f9f9f9;
  }

  .btnRow {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
`;

const Buttons = ({

  handleDigits,
  handleDecimal,
  handleClear,
  handleToggle,
  handlePercent,
  handleOperator
}) => {
  return (
    <StyledBtnDiv>
      <div className="btnRow">
        <button onClick={handleClear} value="AC">
          AC
        </button>
        <button onClick={handlePercent} value="percentage">
          %
        </button>
        <button onClick={handleToggle} value="toggle">
          +/-
        </button>
        <button onClick={handleOperator} value="/">
          /
        </button>
      </div>
      <div className="btnRow">
        <button onClick={handleDigits} value="7">
          7
        </button>
        <button onClick={handleDigits} value="8">
          8
        </button>
        <button onClick={handleDigits} value="9">
          9
        </button>
        <button onClick={handleOperator} value="*">
          *
        </button>
      </div>
      <div className="btnRow">
        <button onClick={handleDigits} value="4">
          4
        </button>
        <button onClick={handleDigits} value="5">
          5
        </button>
        <button onClick={handleDigits} value="6">
          6
        </button>
        <button onClick={handleOperator} value="-">
          -
        </button>
      </div>

      <div className="btnRow">
        <button onClick={handleDigits} value="1">
          1
        </button>
        <button onClick={handleDigits} value="2">
          2
        </button>
        <button onClick={handleDigits} value="3">
          3
        </button>
        <button onClick={handleOperator} value="+">
          +
        </button>
      </div>

      <div className="btnRow">
        <button onClick={handleDigits} value="0">
          0
        </button>
        <button className="dot" onClick={handleDecimal} value=".">
          .
        </button>
        <button onClick={handleOperator} value="=">
          =
        </button>
      </div>
    </StyledBtnDiv>
  );
};

export default Buttons;
