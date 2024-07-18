import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TriangleAreaInput from '../components/TriangleAreaInput';

test('calculates the area of the triangle correctly', () => {
  const { getByPlaceholderText, getByText } = render(<TriangleAreaInput />);
  const heightInput = getByPlaceholderText('Enter height');
  const widthInput = getByPlaceholderText('Enter width');

  act(() => {
    fireEvent.change(heightInput, { target: { value: '10' } });
    fireEvent.change(widthInput, { target: { value: '5' } });
  });

  expect(getByText('Area of the triangle: 25')).toBeInTheDocument();
});

test('does not display invalid input message when fields are empty', () => {
  const { getByPlaceholderText, queryByText } = render(<TriangleAreaInput />);
  const heightInput = getByPlaceholderText('Enter height');
  const widthInput = getByPlaceholderText('Enter width');

  act(() => {
    fireEvent.change(heightInput, { target: { value: '' } });
    fireEvent.change(widthInput, { target: { value: '' } });
  });

  expect(queryByText('Invalid input: Both height and width must be positive numbers.')).toBeNull();
});

test('handles negative input gracefully', () => {
  const { getByPlaceholderText, getByText } = render(<TriangleAreaInput />);
  const heightInput = getByPlaceholderText('Enter height');
  const widthInput = getByPlaceholderText('Enter width');

  act(() => {
    fireEvent.change(heightInput, { target: { value: '-5' } });
    fireEvent.change(widthInput, { target: { value: '-8' } });
  });

  expect(getByText('Invalid input: Both height and width must be positive numbers.')).toBeInTheDocument();
});

test('handles zero input gracefully', () => {
  const { getByPlaceholderText, getByText } = render(<TriangleAreaInput />);
  const heightInput = getByPlaceholderText('Enter height');
  const widthInput = getByPlaceholderText('Enter width');

  act(() => {
    fireEvent.change(heightInput, { target: { value: '0' } });
    fireEvent.change(widthInput, { target: { value: '5' } });
  });

  expect(getByText('Invalid input: Both height and width must be positive numbers.')).toBeInTheDocument();
});

test('handles large numbers correctly', () => {
  const { getByPlaceholderText, getByText } = render(<TriangleAreaInput />);
  const heightInput = getByPlaceholderText('Enter height');
  const widthInput = getByPlaceholderText('Enter width');

  act(() => {
    fireEvent.change(heightInput, { target: { value: '1000000' } });
    fireEvent.change(widthInput, { target: { value: '500000' } });
  });

  expect(getByText('Area of the triangle: 250000000000')).toBeInTheDocument();
});
