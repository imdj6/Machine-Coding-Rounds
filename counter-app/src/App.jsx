import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setSecond(0);
    setMinute(0);
    setStart(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (start) {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => prevMinute + 1);
            return 0;
          }
          return prevSecond + 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [start]);
  return (
    <div className='main-div'>
      <div className='timer-div'>
        <span className='timer'>{minute < 10 ? `${"0" + minute}` : minute}</span>:<span className='timer'>{second < 10 ? `${"0" + second}` : second}</span>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={handleStart}>
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
  )
}

export default App
