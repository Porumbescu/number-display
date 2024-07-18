import React, { useState } from 'react';
import TriangleAreaDisplay from './TriangleAreaDisplay';

const TriangleAreaInput: React.FC = () => {
    const [height, setHeight] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null);

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setHeight(!isNaN(value) ? value : null);
    };

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setWidth(!isNaN(value) ? value : null);
    };

    return (
        <div className="container">
            <label htmlFor="height-input">Enter height:</label>
            <input id="height-input" type="number" onChange={handleHeightChange} placeholder="Enter height" />
            <label htmlFor="width-input">Enter width:</label>
            <input id="width-input" type="number" onChange={handleWidthChange} placeholder="Enter width" />
            <TriangleAreaDisplay height={height} width={width} />
        </div>
    );
};

export default TriangleAreaInput;
