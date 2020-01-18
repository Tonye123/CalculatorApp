import React from 'react';
import styled from 'styled-components';

const StyledBtnDiv = styled.div`
    max-width: 310px;
    margin: auto auto;
    padding-top: 10px;
    
  
    
    .dot {
      position: relative;
      right: 42px;
    }
  
    button {
    border-radius: 50px;
    padding: 10px;
    font-size:1rem;
    margin: 5px;
    width: 60px;
    height: 60px;
    outline: none;
  }

  .btnRow {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }





`;


const Buttons = ({handleClickFn}) => {

    

    return(
    <StyledBtnDiv>
        <div className="btnRow">
        <button onClick={handleClickFn} value='AC'>AC</button>
        <button onClick={handleClickFn} value='/'>/</button>
        </div>
        <div className="btnRow">
          <button onClick={handleClickFn} value='7'>7</button>
          <button onClick={handleClickFn} value='8'>8</button>
          <button onClick={handleClickFn} value='9'>9</button>
          <button onClick={handleClickFn} value='*'>*</button>
        </div>
        <div className="btnRow">
          <button onClick={handleClickFn} value='4'>4</button>
          <button onClick={handleClickFn} value='5'>5</button>
          <button onClick={handleClickFn} value='6'>6</button>
          <button onClick={handleClickFn} value='-'>-</button>
        </div>
        
        <div className="btnRow">
          <button onClick={handleClickFn} value='1'>1</button>
          <button onClick={handleClickFn} value='2'>2</button>
          <button onClick={handleClickFn} value='3'>3</button>
          <button onClick={handleClickFn} value='+'>+</button>
        </div>
        
        <div className="btnRow">
          <button onClick={handleClickFn} value='0'>0</button>
          <button  className="dot"  onClick={handleClickFn} value='.'>.</button>
          <button onClick={handleClickFn} value='='>=</button>
        </div>

    </StyledBtnDiv>
    )
}


export default Buttons;