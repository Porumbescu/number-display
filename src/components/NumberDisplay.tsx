import React from 'react';

interface NumberDisplayProps {
    number: number | null;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
    if (number === null) return null;

    const start = number > 0 ? 1 : number;
    const end = number > 0 ? number : 0;

    return (
        <div>
            {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(num => (
                <span key={num} style={{ padding: '5px' }}>{num} </span>
            ))}
        </div>
    );
};

export default NumberDisplay;
