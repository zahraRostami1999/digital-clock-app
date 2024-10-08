import styles from './Clock.module.css';
import {useState, useEffect} from 'react';

function Clock(){
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    }, [])

    function formatTime() {
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();

        return (`${padZero(hour)}:${padZero(minute)}:${padZero(second)}`);
    }

    function padZero(value) {
        return value < 10 ? '0' + value : value;
    }

    return(
        <>
        <div className={styles.clockContainer}>
            <span>{formatTime()}</span>
        </div>
        </>
    );
}

export default Clock;