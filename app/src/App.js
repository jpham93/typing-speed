import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [timeLeft, setTime] = useState(5);

  const handleChange = e => {
    const {value} = e.target;
    setInput(value);
    console.log(countWords());
  };

  const countWords = () => {
    const wordsArr = input.trim().split(' ');
    return wordsArr.filter(word => word !== "").length;
  };

  useEffect(() => {
    setTimeout(() =>
      timeLeft > 0 && setTime(prevTime => prevTime - 1), 1000
    );
  }, [timeLeft]);

  return (
    <>
      <form>
        <h1>Speed Typer</h1>
        <textarea
          name='input'
          value={input}
          onChange={handleChange}
        />
        <h4>Time Remaining: {timeLeft}</h4>
        <button>Start</button>
        <h1>Word count: </h1>
      </form>
    </>
  );
};

export default App;
