import BoardRender from './components/boardRender';
import Menu from './components/menu';
import './App.css';

import { useState, useEffect } from 'react'
import lifeCycle from './lifeCycle';

function App() {
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  const [board, setBoard] = useState([]);
  const [refresh, setRefresh] = useState(500)
  const [running, setRunning] = useState(false);

  function toggleCells(y, x) {
    if (board[y][x].cellState === 0) {
      setBoard(board => {
        board[y][x].cellState = 1;
        return [...board];
      });
    } else {
      setBoard(board => {
        board[y][x].cellState = 0;
        return [...board];
      });
    }
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



  let emptyBoard;

  useEffect(() => {
    emptyBoard = generateBoard();
    emptyBoard[3][3].cellState = 1;
    emptyBoard[3][4].cellState = 1;
    emptyBoard[3][5].cellState = 1;
    setBoard(board => emptyBoard);
  }, [width, height]);

  useEffect(() => {
    if (running) {
      const alive = setInterval(life, refresh);
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
      <div className='bg'/>
      <Menu menuProps={
        {
          toggleRunning,
          refresh,
          setRefresh,
          width,
          setWidth,
          height,
          setHeight
        }
      } /> 
      <BoardRender board={board} cellProps={{ toggleCells }} />
    </div>
  );
}

export { App };
