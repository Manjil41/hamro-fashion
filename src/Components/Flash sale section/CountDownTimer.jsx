import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Set initial time in seconds (for example, 1 hour = 3600 seconds)
    const [timeLeft, setTimeLeft] = useState(198000);

    useEffect(() => {
        // Check if timeLeft is 0, if yes stop the countdown
        if (timeLeft <= 0) return;

        // Decrement the timer every second
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    // Helper function to format time in hh:mm:ss
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ];
    };

    const [hours, minutes, seconds] = formatTime(timeLeft);

    return (
        <div className="flex space-x-2 text-red-500 text-lg font-mono">
            <div className="bg-gray-100 px-3 py-1 rounded animate-pulse">{hours}</div>
            <div>:</div>
            <div className="bg-gray-100 px-3 py-1 rounded animate-pulse">{minutes}</div>
            <div>:</div>
            <div className="bg-gray-100 px-3 py-1 rounded animate-pulse">{seconds}</div>
        </div>
    );
};

export default CountdownTimer;
