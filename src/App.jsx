import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1 className="heading">Enter The Button</h1>
      <h4 className="value-display">Your Value: {value}</h4>

      <div className="buttons-container">
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
        <button onClick={() => setValue(0)}>Reset</button>
      </div>
    </div>
  );
}
