import BoardRender from './components/boardRender';
import Menu from './components/menu';
import './App.css';

import { useState, useEffect } from 'react'
import lifeCycle from './lifeCycle';

function App() {
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  const [board, setBoard] = useState([]);
  const [running, setRunning] = useState(false);
  
  function toggleCells(y, x) {
    setBoard(board => {
      board[y][x].cellState = 1;
      return [...board];
    });
    console.log(y, x, board);
  }

  function generateBoard() {
    const newRow = []
    const newBoard = []
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        newRow[x] = {
          cellState: 0,
          cellPosition: [y, x]
        };
      }
      newBoard[y] = [...newRow];
    }
    return newBoard;
  }
  let testBoard;


  testBoard = generateBoard();
  testBoard[3][3].cellState = 1;
  testBoard[3][4].cellState = 1;
  testBoard[3][5].cellState = 1;

  useEffect(() => {
    setBoard(board => testBoard);
  }, []);

  useEffect(() => {
    if (running) {
      const alive = setInterval(life, 1000);
      return () => clearInterval(alive);
    }
  }, [running]);

  function life() {
    setBoard(board => lifeCycle(board));
    console.log("It's alive!")
  }

  function toggleRunning() {
    setRunning(running => !running)
  }



  return (
    <div className="App">
      <Menu toggleRunning={toggleRunning} />
      <BoardRender board={board} cellProps={{ toggleCells }} />
    </div>
  );
}

export { App };
