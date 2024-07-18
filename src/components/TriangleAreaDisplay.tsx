import React from 'react';

interface TriangleAreaProps {
    height: number | null;
    width: number | null;
}

const TriangleAreaDisplay: React.FC<TriangleAreaProps> = ({ height, width }) => {
    if (height === null || width === null) return null;

    if (height <= 0 || width <= 0) {
        return <div>Invalid input: Both height and width must be positive numbers.</div>;
    }

    const area = 0.5 * height * width;
    return <div>Area of the triangle: {area}</div>;
};

export default TriangleAreaDisplay;
