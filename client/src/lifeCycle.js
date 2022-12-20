export default function lifeCycle(oldBoard) {
    const newBoard = oldBoard.map((row) => [...row])
    let currSum = 0;
    for (let y = 0; y < oldBoard.length; y++) {
        for (let x = 0; x < oldBoard[y].length; x++) {
            currSum = sumNeighbours(oldBoard, y, x);

            if (oldBoard[y][x] === 0 && currSum === 3) {

                newBoard[y][x] = 1;
            } else if (oldBoard[y][x] === 1 && ![2, 3].includes(currSum)) {
                newBoard[y][x] = 0;
            }
        }
    }
    return newBoard;
}

function sumNeighbours(board, y, x) {
    let sum = 0
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (!(i === 0 && j === 0)) {
                try {
                    sum += board[y + i][x + j];
                } catch (e) {

                }
            }
        }
    }
    return sum;
}