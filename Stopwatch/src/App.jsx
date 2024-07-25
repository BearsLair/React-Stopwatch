import "./style.css";
import Stopwatch from "./Stopwatch";
import { useState, useEffect } from "react";

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  // useEffect(() => {
  //   Timer();
  // });

  const Timer = () => {
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
  };

  const handleStart = () => {
    startTimer();
  };

  // const handleStop = () => { }

  // const handleReset = () = {}

  return (
    <>
      <div className="body">
        <Stopwatch second={sec} minute={min} hour={hr} start={handleStart} />
      </div>
    </>
  );
}
