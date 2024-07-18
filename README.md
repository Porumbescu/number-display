# Number Visualizer

## Overview

Number Visualizer is a simple React application built with TypeScript. The application allows users to enter a number to display a sequence of numbers and calculate the area of a triangle by providing its height and width.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Jest**: A JavaScript testing framework designed to ensure the correctness of any JavaScript codebase.
- **GitHub Actions**: A CI/CD service that allows you to automate tasks within your software development lifecycle.

## Features

- **Number Display**: Enter a number to display a sequence from 1 to the entered number.
- **Triangle Area Calculator**: Enter the height and width to calculate the area of a triangle.

## Demo

![Number Visualizer Demo](https://i.imgur.com/abZkQMg.gif)

## Tests

The project includes unit tests to ensure the functionality of the components and business logic. The tests are executed using GitHub Actions for continuous integration.

### Test Coverage

- **Number Input Component**:
  - Renders number sequence up to the entered positive number.
  - Renders number sequence from a negative number to 0.
  - Renders number sequence up to a large positive number.

- **Triangle Area Input Component**:
  - Calculates the area of the triangle correctly.
  - Does not display invalid input message when fields are empty.
  - Handles negative input.
  - Handles zero input.

### Running the Tests

To run the tests locally, use the following command:

```bash
npm test
