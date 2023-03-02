import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hi mehrnaz");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>This is Timer</div>;
};

export default Timer;
