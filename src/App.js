import React, { useState, useCallback } from 'react';
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';
import { generateSudoku, isSolved } from './utils/sudokuUtils';
import './styles.css';

const App = () => {
  const [solution, setSolution] = useState(generateSudoku(true));
  const [board, setBoard] = useState(() => {
    const newBoard = generateSudoku();
    // Ensure the board matches the solution where numbers are present
    return newBoard.map((row, i) => row.map((cell, j) => cell === 0 ? 0 : solution[i][j]));
  });

  const handleCellChange = useCallback((row, col, value) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[row][col] = value;
      return newBoard;
    });
  }, []);

  const handleReset = useCallback(() => {
    if (window.confirm('Are you sure you want to reset the board?')) {
      const newSolution = generateSudoku(true);
      setSolution(newSolution);
      const newBoard = generateSudoku();
      setBoard(newBoard.map((row, i) => row.map((cell, j) => cell === 0 ? 0 : newSolution[i][j])));
    }
  }, []);

  const handleGenerate = useCallback(() => {
    const newSolution = generateSudoku(true);
    setSolution(newSolution);
    const newBoard = generateSudoku();
    setBoard(newBoard.map((row, i) => row.map((cell, j) => cell === 0 ? 0 : newSolution[i][j])));
  }, []);

  return (
    <div className="app">
      <h1>Sudoku</h1>
      <Board board={board} solution={solution} onCellChange={handleCellChange} />
      <ControlPanel onReset={handleReset} onGenerate={handleGenerate} />
    </div>
  );
};

export default App;
