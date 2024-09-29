import React from 'react';

const Cell = ({ value, isCorrect, isRowComplete, isColumnComplete, onChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (isNaN(newValue) || newValue < 1 || newValue > 9) {
      onChange(0);
    } else {
      onChange(newValue);
    }
  };

  const cellClass = `cell ${isCorrect ? 'correct' : value !== 0 ? 'incorrect' : ''} ${
    isRowComplete || isColumnComplete ? 'complete' : ''
  }`;

  return (
    <input
      type="number"
      className={cellClass}
      value={value === 0 ? '' : value}
      onChange={handleChange}
      min="1"
      max="9"
    />
  );
};

export default Cell;