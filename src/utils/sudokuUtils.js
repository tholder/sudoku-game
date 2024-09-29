function isValid(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) {
      return false;
    }
  }
  
  let startRow = row - row % 3,
      startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }
  
  return true;
}

function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

export function generateSudoku(solved = false) {
  let board = Array(9).fill().map(() => Array(9).fill(0));
  
  // Fill diagonal 3x3 boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        let num;
        do {
          num = Math.floor(Math.random() * 9) + 1;
        } while (!isValid(board, i + j, i + k, num));
        board[i + j][i + k] = num;
      }
    }
  }
  
  // Solve the rest of the board
  solveSudoku(board);
  
  if (!solved) {
    // Remove numbers to create the puzzle
    let cellsToRemove = 40; // Adjust this for difficulty
    while (cellsToRemove > 0) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      if (board[row][col] !== 0) {
        board[row][col] = 0;
        cellsToRemove--;
      }
    }
  }
  
  return board;
}

export function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return false;
    }
  }
  return true;
}