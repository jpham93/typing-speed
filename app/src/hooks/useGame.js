import { useRef, useState, useEffect } from 'react';

export default (time) => {
  const [input, setInput] = useState('');
  const [timeLeft, setTime] = useState(time);
  const [isRunning, setRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const startGame = () => {
    setRunning(true);
    setTime(time);
    setInput('');
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  const endGame = () => {
    setRunning(false);
    setWordCount(countWords(input));
  };

  const handleChange = e => {
    const {value} = e.target;
    setInput(value);
  };

  const countWords = (string) => {
    return string.trim().split(' ').length;
  };

  useEffect(() => {
    if(isRunning && timeLeft > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000)
    } else if(timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, isRunning]);

  return {
    input,
    timeLeft,
    isRunning,
    wordCount,
    handleChange,
    startGame,
    textareaRef
  };

};
