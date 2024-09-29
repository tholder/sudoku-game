import React from 'react';
import Cell from './Cell';

interface BoardProps {
  board: number[][];
  solution: number[][];
  onCellChange: (row: number, col: number, value: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, solution, onCellChange }) => {
  const isRowComplete = (row: number) => board[row].every((cell, index) => cell === solution[row][index]);
  const isColumnComplete = (col: number) => board.every((row, index) => row[col] === solution[index][col]);

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`row ${isRowComplete(rowIndex) ? 'complete' : ''}`}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              isCorrect={cell === solution[rowIndex][colIndex]}
              isRowComplete={isRowComplete(rowIndex)}
              isColumnComplete={isColumnComplete(colIndex)}
              onChange={(value) => onCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;