import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec(sec + 1);
    }, 1000);

    if (sec === 60) {
      setSec(0);
      setMin(min + 1);
    }

    if (min === 60) {
      setSec(sec === 0);
      setMin(min === 0);
      setHr(hr + 1);
    }
  }, [sec, min, hr, isStarted, isStopped]);

  const handleStart = () => {
    setIsStarted(true);
    setIsStopped(false);
  };

  // const handleStop = () => {}

  // const handleReset = () = {}

  return (
    <>
      <div className="stopwatch">
        <h1>
          {hr}:{min}:{sec}
        </h1>
        <div className="stopwatch-btns">
          <button className="start-btn" onClick={handleStart}>
            Start
          </button>
          <button className="stop-btn">Stop</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
}
