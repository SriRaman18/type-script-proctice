import React, { useState, useRef, useEffect } from "react";

const Mutable = () => {
  const [timer, setTimer] = useState(0);
  const interValueRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValueRef.current) {
      window.clearInterval(interValueRef.current);
    }
  };

  useEffect(() => {
    interValueRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer}-
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default Mutable;
