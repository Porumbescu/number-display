import React from 'react';
import { calculateArea } from '../utils/utils';

interface TriangleAreaProps {
    height: number | null;
    width: number | null;
}

const TriangleAreaDisplay: React.FC<TriangleAreaProps> = ({ height, width }) => {
    if (height === null || width === null) return null;

    try {
        const area = calculateArea(height, width);
        return <div>Area of the triangle: {area}</div>;
    } catch (error) {
        const errorMessage = (error as Error).message;
        return <div>{errorMessage}</div>;
    }
};

export default TriangleAreaDisplay;
