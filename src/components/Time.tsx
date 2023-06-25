import { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function formatTime(n: number) {
    n %= 60;
    return n < 10 ? n.toString().padStart(2, "0") : n;
  }

  const secs = formatTime(time);
  const mins = formatTime(Math.floor(time / 60));
  const hrs = Math.floor(time / 3600);

  return <p>{`${hrs > 0 ? `${hrs}:` : ""}${mins}:${secs}`}</p>;
}

export default Time;
