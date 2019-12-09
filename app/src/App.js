import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [timeLeft, setTime] = useState(5);
  const [isRunning, setRunning] = useState(false);

  const handleChange = e => {
    const {value} = e.target;
    setInput(value);
  };

  const countWords = () => {
    const wordsArr = input.trim().split(' ');
    return wordsArr.filter(word => word !== "").length;
  };

  useEffect(() => {
    if (timeLeft > 0 && isRunning) {
      setTimeout( () => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setRunning(false);
    }
  }, [timeLeft, isRunning]);

  return (
    <>
      <h1>Speed Typer</h1>
      <textarea
        name='input'
        value={input}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeLeft}</h4>
      <button onClick={() => setRunning(true)}>Start</button>
      <h1>Word count: </h1>
    </>
  );
};

export default App;
