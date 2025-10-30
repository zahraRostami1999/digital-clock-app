import styles from './Clock.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = () => {
    const h = String(time.getHours()).padStart(2, '0');
    const m = String(time.getMinutes()).padStart(2, '0');
    const s = String(time.getSeconds()).padStart(2, '0');
    return { h, m, s };
  };

  const { h, m, s } = formatTime();

  return (
    <div className={styles.clockContainer}>
      <div className={styles.digitalTime}>
        {h}:{m}:<span className={styles.second}>{s}</span>
      </div>
      
      <Link to="/stopWatch" className={styles.navButton}>
        Stop Watch
      </Link>
    </div>
  );
}

export default Clock;