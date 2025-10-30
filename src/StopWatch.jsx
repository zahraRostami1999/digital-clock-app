import styles from "./StopWatch.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');
    return { hours, minutes, seconds, milliseconds };
  };

  const { hours, minutes, seconds, milliseconds } = formatTime();

  return (
    <div className={styles.container}>
      <div className={styles.stopwatchTime}>
        {hours}:{minutes}:{seconds}
      </div>

      <div className={styles.btns}>
        <button className={styles.startBtn} onClick={start}>Start</button>
        <button className={styles.stopBtn} onClick={stop}>Stop</button>
        <button className={styles.resetBtn} onClick={reset}>Reset</button>
      </div>

      <Link to="/" className={styles.backBtn}>Back</Link>
    </div>
  );
}

export default StopWatch;