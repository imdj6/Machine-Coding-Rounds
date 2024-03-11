import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [start, setStart] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerTicked, setTimerTicked] = useState(false);

  const handleStart = () => {
    setStart(true);
    setTimerStarted(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setSecond(0);
    setMinute(0);
    setStart(false);
    setTimerStarted(false);
    setTimerTicked(false);
  };

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setSecond(prevSecond => {
          if (prevSecond === 10) {
            if (!timerTicked) {
              setTimerTicked(true);
            }
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [start, timerTicked]);

  useEffect(() => {
    if (timerTicked && second === 0) {
      setMinute(prevMinute => prevMinute + 1);
    }
  }, [second, timerTicked]);

  return (
    <div className='main-div'>
      <div className='timer-div'>
        <span className='timer'>{minute < 10 ? `0${minute}` : minute}</span>:
        <span className='timer'>{second < 10 ? `0${second}` : second}</span>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={handleStart} disabled={start}>
          Start
        </button>
        <button className='btn' onClick={handleStop}>
          Stop
        </button>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;