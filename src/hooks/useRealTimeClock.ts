// hooks/useRealTimeClock.ts
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const useRealTimeClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const date = currentDateTime;

  const rawDateStr = format(date, "EEEE, dd MMMM yyyy", { locale: id });
  const dateStr = rawDateStr.toUpperCase();

  const timeStr = format(date, "HH:mm:ss");

  return { dateStr, timeStr };
};