import { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [nextNumbers, setNextNumbers] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Check if the input is a valid number
    if (!isNaN(value)) {
      setInput(value);
      const number = parseInt(value, 10);

      if (number < 0) {
        setMessage('Please enter a positive number');
        setNextNumbers([]);
      } else if (number % 2 === 0) {
        setMessage('');
        setNextNumbers([number + 2, number + 4, number + 6]);
      } else {
        setMessage('');
        setNextNumbers([number + 2, number + 4, number + 6]);
      }
    } else {
      setMessage('Please enter a valid number');
      setNextNumbers([]);
    }
  };

  return (
    <div className="App">
      <h1>Number Checker</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      {message && <p>{message}</p>}
      {nextNumbers.length > 0 && (
        <p>Next 3 numbers: {nextNumbers.join(', ')}</p>
      )}
    </div>
  );
};

export default App;
