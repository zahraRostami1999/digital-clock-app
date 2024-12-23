import styles from "./StopWatch.module.css";
import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [start, setStart] = useState(false);
  const startTime = useRef(0);
  const intervalId = useRef(null);

  useEffect(() => {
    if (start) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime.current);
      }, 10);
    } else {
      clearInterval(intervalId.current);
    }
  }, [start]);

  const startHandle = () => {
    setStart(true);
    startTime.current = Date.now() - elapsedTime;
  };

  const handleStop = () => {
    setStart(false);
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setStart(false);
    clearInterval(intervalId.current);
  };

  const formatTime = () => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    const secunds = Math.floor(elapsedTime / (1000) % 60);
    const miliseconds = Math.floor((elapsedTime % 1000) / 10)

    return `${hours}:${minutes}:${secunds}:${miliseconds}`;
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Stop Watch</h1>
          <h3>{formatTime()}</h3>
          <div className={styles.btns}>
            <button className={styles.startBtn} onClick={startHandle}>Start</button>
            <button className={styles.stopBtn} onClick={handleStop}>Stop</button>
            <button className={styles.resetBtn} onClick={handleReset}>Reset</button>
          </div>
          <button className={styles.backBtn}><a href="/">Back</a></button>
        </div>

      </div>
    </>
  );
}

export default StopWatch;
