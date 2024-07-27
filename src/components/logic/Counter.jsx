import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) return 60;
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedCounter = String(counter).padStart(2, "0");

  return (
    <>
      <span>00 : {formattedCounter}</span>
    </>
  );
}
