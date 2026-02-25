
// import './App.css';
// import Calculator from './Calculator';
// import Counter from './Counter';

// function App() {
//   function sayhello(){
//     alert("you clicked me!!");
//   }


//   return (
//     <div className='container' >
//      <div className='box'>
//       <h1>Hello world</h1>
//      </div>
//      <button className='click' onClick={()=>sayhello()}>Click me</button>
//       {/* <Counter/> */}
//       <Calculator/>
      
//     </div>
//   );
// }

// export default App;import React, { useState } from "react";
import { useState } from "react";
import "./App.css";
import Keypad from "./Keypad";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function handleCalculate() {
    try {
      const outputvalue = eval(input);
      setInput(outputvalue.toString());
    } catch {
      setInput("Error");
    }
  }

  function handleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1>Calculator</h1>

      <div className="calculator">
        <input
          type="text"
          value={input}
          readOnly
          className="output"
        />

        <Keypad
          handleClick={handleClick}
          handleCalculate={handleCalculate}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;