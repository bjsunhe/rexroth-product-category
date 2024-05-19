import React, { useState } from 'react';
import './Ask.css';

const Ask = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Message ChatGPT"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        <i className="fas fa-arrow-up"></i>
      </button>
    </form>
  );
};



export default Ask;
