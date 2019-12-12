import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const TIME = 10;

  const [input, setInput] = useState('');
  const [timeLeft, setTime] = useState(TIME);
  const [isRunning, setRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const handleChange = e => {
    const {value} = e.target;
    setInput(value);
  };

  const countWords = () => {
    const wordsArr = input.trim().split(' ');
    return wordsArr.filter(word => word !== "").length;
  };

  const startGame = () => {
    setRunning(true);
    setTime(TIME);
    setInput('');
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  const endGame = () => {
    setRunning(false);
    setWordCount(countWords(input));
  };

  useEffect(() => {
    if (timeLeft > 0 && isRunning) {
      setTimeout( () => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, isRunning]);

  return (
    <>
      <h1>Speed Typer</h1>
      <textarea
        name='input'
        value={input}
        onChange={handleChange}
        disabled={!isRunning}
        ref={textareaRef}
      />
      <h4>Time Remaining: {timeLeft}</h4>
      <button
        disabled={isRunning}
        onClick={startGame}
      >
        Start
      </button>
      <h1>Word count: { timeLeft === 0 ? wordCount : '???' }</h1>
    </>
  );
};

export default App;
