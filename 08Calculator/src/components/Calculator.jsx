import React, { useState } from 'react';
import './../App.css'; // For styling (optional)

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput)=>prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleCalculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
