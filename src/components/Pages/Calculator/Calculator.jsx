import React, { useState } from "react";
import DigitButtons from "./components/DigitButtons";
import OperationButtons from "./components/OperationButtons";
import "./style.css";

export default function Calculator() {

  const [currentOperand, setCurrentOperand] = useState("")
  const [previousOperand, setPreviousOperand] = useState("")
  const [operation, setOperation] = useState("")

  const handleClick = (num)=> {
    
    
    
    
    
    setCurrentOperand((prev)=> prev + num)
    
    // Prevents writing too much zeros
    if(currentOperand.charAt(0)=== "0") {   /// startsWith("0")
      setCurrentOperand(num)
    }

    //   // Prevents writing too much dots
      if(currentOperand.startsWith(".") ) {
        setCurrentOperand(num)
      }
    
    // // if(currentOperand.startsWith("0") && !currentOperand.includes(".")) {
    //   //   setCurrentOperand((prev)=> currentOperand + "."+ prev)
    //   // }
      
      
      
      
      
  }

  const handleOperationalClick = (op) => {
      if(currentOperand !== "") {
        setPreviousOperand(currentOperand)
        setCurrentOperand("")
        setOperation(op)
      }
  }

  const handleEqualClick=()=> {
    if(currentOperand !== "" && previousOperand !== "") {
      switch(operation) {
        case "+":
          setCurrentOperand(`${+previousOperand +  +currentOperand}`)
          break;
          case "-":
          setCurrentOperand(`${+previousOperand -  +currentOperand}`)
          break;
          case "*":
          setCurrentOperand(`${+previousOperand *  +currentOperand}`)
          break;
          case "÷":
          setCurrentOperand(`${+previousOperand /  +currentOperand}`)
          break;
      }
      setPreviousOperand("")
      setOperation("")
    }
  }

  const handleClearAllClick = () =>{ 
    setCurrentOperand("")
    setPreviousOperand("")
    setOperation("")
  }

  const handleClearSingleClick = ()=> {
    setCurrentOperand((prev) => prev.slice(0, -1))
  }

  
  
 console.log("cur",currentOperand)
 console.log("cur",typeof currentOperand)
 console.log("prev",previousOperand)
 console.log("prev",typeof previousOperand)
 console.log("ope",operation)
 console.log("ope", typeof operation)
  return (
    <div className="container">
      <div className="calculator">
        <div className="output">
          <div className="previous__operand">{previousOperand} {operation}</div>
          <div className="current__operand">{currentOperand}</div>
        </div>

        <div className="buttons__container">
          <button
            className="btn span__2"
            onClick={handleClearAllClick}
          >
            AC
          </button>
          <button className="btn" onClick={handleClearSingleClick}>DEL</button>
          <OperationButtons operation="÷" handleOperationalClick={handleOperationalClick}/>
          <DigitButtons digit="1" handleClick={handleClick}/>
          <DigitButtons digit="2" handleClick={handleClick}/>
          <DigitButtons digit="3" handleClick={handleClick}/>
          <OperationButtons operation="*" handleOperationalClick={handleOperationalClick}/>
          <DigitButtons digit="4" handleClick={handleClick}/>
          <DigitButtons digit="5" handleClick={handleClick}/>
          <DigitButtons digit="6" handleClick={handleClick}/>
          <OperationButtons operation="+" handleOperationalClick={handleOperationalClick}/>
          <DigitButtons digit="7" handleClick={handleClick}/>
          <DigitButtons digit="8" handleClick={handleClick}/>
          <DigitButtons digit="9" handleClick={handleClick}/>
          <OperationButtons operation="-" handleOperationalClick={handleOperationalClick}/>
          <DigitButtons digit="." handleClick={handleClick}/>
          <DigitButtons digit="0" handleClick={handleClick}/>
          <button onClick={handleEqualClick} className="btn span__2" >=</button>
        </div>
      </div>
    </div>
  );
}
