import React from 'react';

interface CellProps {
  value: number;
  isCorrect: boolean;
  isRowComplete: boolean;
  isColumnComplete: boolean;
  onChange: (value: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, isCorrect, isRowComplete, isColumnComplete, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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