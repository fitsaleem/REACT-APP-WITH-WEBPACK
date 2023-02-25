import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div>
        <button className="btn" onClick={incrementCount}>
          +
        </button>
        <button className="btn" onClick={decrementCount}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
