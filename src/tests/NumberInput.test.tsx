import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberInput from '../components/NumberInput';

test('renders number sequence up to the entered positive number', () => {
  const { getByPlaceholderText, getByText } = render(<NumberInput />);
  const input = getByPlaceholderText('Enter a number');

  act(() => {
    fireEvent.change(input, { target: { value: '5' } });
  });

  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('4')).toBeInTheDocument();
  expect(getByText('5')).toBeInTheDocument();
});

test('renders number sequence from negative number to 0', () => {
  const { getByPlaceholderText, getByText } = render(<NumberInput />);
  const input = getByPlaceholderText('Enter a number');

  act(() => {
    fireEvent.change(input, { target: { value: '-3' } });
  });

  expect(getByText('-3')).toBeInTheDocument();
  expect(getByText('-2')).toBeInTheDocument();
  expect(getByText('-1')).toBeInTheDocument();
  expect(getByText('0')).toBeInTheDocument();
});

test('renders number sequence up to a large positive number', () => {
  const { getByPlaceholderText, getByText } = render(<NumberInput />);
  const input = getByPlaceholderText('Enter a number');

  act(() => {
    fireEvent.change(input, { target: { value: '100' } });
  });

  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('50')).toBeInTheDocument();
  expect(getByText('100')).toBeInTheDocument();
});
