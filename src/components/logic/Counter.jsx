import { useState, useEffect } from "react";

export default function Counter() {
  const styles = {
    display: "inline",
    fontFamily: "var(--Lobster-font)",
    color: "goldenrod",
    fontSize: "clamp(1em, 2vw, 2em)",
  };
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
      <span style={styles}>00 : {formattedCounter}</span>
    </>
  );
}
