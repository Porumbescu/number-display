export const calculateArea = (height: number, width: number): number => {
    if (height <= 0 || width <= 0) {
        throw new Error('Both height and width must be positive numbers.');
    }
    return 0.5 * height * width;
};
