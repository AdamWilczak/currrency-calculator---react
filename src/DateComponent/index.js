import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

const DateComp = () => {
  const [date, setDate] = useState(new Date());

  const day = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    
  });

  const time = date.toLocaleTimeString(undefined);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="dateStyle">
      Today is:<br/> {day}, {time}
    </p>
  );
};

export default DateComp;
