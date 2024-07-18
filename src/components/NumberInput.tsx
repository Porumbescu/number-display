import React, { useState } from 'react';
import NumberDisplay from './NumberDisplay';

const NumberInput: React.FC = () => {
    const [number, setNumber] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setNumber(!isNaN(value) ? value : null);
    };

    return (
        <div className="container">
            <label htmlFor="number-input">Enter a number:</label>
            <input id="number-input" type="number" onChange={handleChange} placeholder="Enter a number" />
            <NumberDisplay number={number} />
        </div>
    );
};

export default NumberInput;
