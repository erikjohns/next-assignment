"use client";
import React, { useState } from 'react';

const Counter = ({ incrementAmount, buttonColor }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => (prevCount + incrementAmount) % 11);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={increment}
                style={{ backgroundColor: buttonColor }}
            >
                Increment by {incrementAmount}
            </button>
        </div>
    );
};

export default Counter;