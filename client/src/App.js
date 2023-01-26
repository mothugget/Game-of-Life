import BoardRender from './components/boardRender';
import Menu from './components/menu';
import './App.css';

import { useState, useEffect } from 'react'
import lifeCycle from './lifeCycle';

function App() {
  const [height, setHeight] = useState(31);
  const [width, setWidth] = useState(31);
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
    emptyBoard[15][14].cellState = 1;
    emptyBoard[15][15].cellState = 1;
    emptyBoard[15][16].cellState = 1;
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
  }

  function toggleRunning() {
    setRunning(running => !running)
  }

function clearBoard() {
  setBoard(generateBoard());
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
          setHeight,
          running,
          clearBoard,
          life
        }
      } /> 
      <BoardRender board={board} cellProps={{ toggleCells }} />
    </div>
  );
}

export { App };
