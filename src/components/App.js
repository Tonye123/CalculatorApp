import React from 'react';
import '../index.css';
import styled from 'styled-components';

import Buttons from './Buttons';
import { useState } from 'react';

const StyledMainDiv = styled.div`
  max-width: 320px;
  background-color: teal;
  font-size: 2.5rem;
  padding: 15px;
  border-radius:8px;
  margin: 0 auto;
  position: relative;
 

  .display {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding-right: 18px;
    background: white;
    border: 1px solid;
    overflow: hidden;
    height: 15vh;
    justify-content: flex-end;
    align-items: flex-end;
  }

`

function App() {
  const [ state, setState] = useState({
    equation: '',
    result: 0
  });

  const handleClick = (e) => {
    let clickedButton = e.target.value;
    //check if target value is a number 
    if(clickedButton === 'AC')  return clear();
    if(!isNaN(clickedButton) || clickedButton === ".") {
      if(clickedButton === '.' && equation.indexOf(clickedButton) !== -1) return
      if(state.equation.startsWith('0',0) && clickedButton === '0' ) return
     
  
      setState(({equation})=>({ equation: equation + clickedButton }))
    }
    else if(['+','-','*','/'].indexOf(clickedButton) !== -1 && state.equation.indexOf(clickedButton) === -1) {

      state.result > 0 ? 
      setState(({result})=>({

        equation: result + clickedButton,
        
        
      })) : setState(({equation})=>({
          // '' + clickedButton
        equation: equation + clickedButton,
        
        
      }))

    } else if(clickedButton === '=') { solveEquation(); }

    return 

  
}


const solveEquation = () => {
      if(state.equation.length <= 2) return;
      
      let expression = state.equation

      let extractedEquation = expression.slice(0,expression.length)
      // eslint-disable-next-line
      let evalEquation = new Function(`return ${extractedEquation}`)
      let ans = evalEquation().toLocaleString()

      setState({
        equation: '',
        result: ans})

}

const clear = () => {
  setState({
    equation: '',
    result: 0
  })
}

const { equation,result} = state



  return (
    <StyledMainDiv>
      <div className ="display">
           <div> {equation} </div>
           {result}
      </div>

      
      <Buttons handleClickFn = {handleClick}/>
      
      
      
     
    </StyledMainDiv>
  );
}

export default App;
