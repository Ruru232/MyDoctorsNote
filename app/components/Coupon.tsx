'use client';
import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const initialTime = 10 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(initialTime);
    }
  }, [timeLeft, initialTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 gap-8 py-3 px-0 md:py-3.5 xl:py-1.5 text-center bg-custom-blue z-50">
      <p className="text-white font-bold gap-8 text-sm md:text-base tracking-wide">
        30% OFF if you order in the next{' '}
        <span className="font-extrabold ml-px">{formatTime(timeLeft)}</span>
      </p>
    </div>
  );
};

export default Timer;
