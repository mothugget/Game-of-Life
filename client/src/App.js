import BoardRender from './components/boardRender';
import './App.css';

import { useState, useEffect } from 'react'
import lifeCycle from './lifeCycle';

function App() {
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  const [board, setBoard] = useState([]);



  function generateBoard() {
    const newRow = []
    for (let x = 0; x < width; x++) {
      newRow[x] = 0;
    }
    const newBoard = []
    for (let y = 0; y < height; y++) {
      newBoard[y] = [...newRow];
    }
    return newBoard;
  }
  let testBoard;

  testBoard = generateBoard();
  testBoard[3][3] = 1;
  testBoard[3][4] = 1;
  testBoard[3][5] = 1;
  useEffect(() => {
    setBoard(testBoard);
  }, []);

  function life() {
    setBoard(lifeCycle(board));
  }

  // setInterval(life, 500)



  return (
    <div className="App">
      <BoardRender board={board} />
    </div>
  );
}

export { App };
