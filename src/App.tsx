import React from 'react';
import './styles/App.css';
import NumberInput from './components/NumberInput';
import TriangleAreaInput from './components/TriangleAreaInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Number Display and Triangle Area Calculator</h1>
      <NumberInput />
      <TriangleAreaInput />
    </div>
  );
};

export default App;
