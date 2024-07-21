import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCounter((preCounter) => {
        if (preCounter === 0) return 60;
        return preCounter - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h2>00:{counter}</h2>
    </>
  );
}

export default Counter;
