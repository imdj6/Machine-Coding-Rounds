import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState({ minute: 0, second: 0 });
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setTime({ minute: 0, second: 0 });
    setStart(false);
  };

  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newSecond = prevTime.second === 59 ? 0 : prevTime.second + 1;
          const newMinute = prevTime.second === 59 ? prevTime.minute + 1 : prevTime.minute;
          return { minute: newMinute, second: newSecond };
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [start]);

  return (
    <div className='main-div'>
      <div className='timer-div'>
        <span className='timer'>{time.minute < 10 ? `0${time.minute}` : time.minute}</span>:
        <span className='timer'>{time.second < 10 ? `0${time.second}` : time.second}</span>
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