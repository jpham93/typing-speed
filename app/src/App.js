import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    const {value} = e.target;
    setInput(value);

    console.log(input);
  };

  return (
    <>
      <form>
        <h1>Speed Typer</h1>
        <textarea
          name='input'
          value={input}
          onChange={handleChange}
        />
        <h4>Time Remaining: </h4>
        <button>Start</button>
        <h1>Word count: </h1>
      </form>
    </>
  );
};

export default App;
