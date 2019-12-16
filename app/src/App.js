import React from 'react';
import useGame from "./hooks/useGame";

import './App.css';

const App = () => {
  const TIME = 10;

  const {
    input,
    handleChange,
    isRunning,
    textareaRef,
    timeLeft,
    startGame,
    wordCount,
  } = useGame(TIME);

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
