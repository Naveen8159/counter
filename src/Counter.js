import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>
        <h2>count:{count}</h2>

        <div className="buttons">
          <button className="inc"onClick={() => setCount(count + 1)}>Increase</button>
          <button className="dec" onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;