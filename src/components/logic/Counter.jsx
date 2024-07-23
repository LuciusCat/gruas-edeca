import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((preCounter) => {
        if (preCounter === 0) return 60;
        return preCounter - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>00:{counter}</h2>
    </>
  );
}

export default Counter;
