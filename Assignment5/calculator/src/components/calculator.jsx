import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString()); // Evaluate the expression
      } catch (error) {
        setInput('Error');
      }
    } else if (value === '√') {
      try {
        setInput(Math.sqrt(eval(input)).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === '^2') {
      try {
        setInput(Math.pow(eval(input), 2).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'C', '%', '√', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', '^2',
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        className="calculator-display"
        readOnly
      />
      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className="calculator-button"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
