import React, { useState } from "react";
import SubGame from "./SubGame";
import { calculateWinner, calculateSubGameWinner } from "./winner";

const emptyBoard = [...Array(9)].map(() => Array(9).fill(null));

function copyBoard(board) {
  return board.map(x => x.slice());
}

function subBoardFull(board) {
  return board.indexOf(null) === -1;
}

function isTargetBoard(currentBoard, lastMove, boardToCheck) {
  return (
    lastMove === null ||
    calculateSubGameWinner(currentBoard[lastMove[1]]) ||
    subBoardFull(currentBoard[lastMove[1]]) ||
    lastMove[1] === boardToCheck
  );
}

export default function MetaTicTacToe() {
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const toggleXIsNext = () => setXIsNext(x => !x);
  const [lastMove, setLastMove] = useState(null);

  const winner = calculateWinner(board);

  function clickSquare(i, j) {
    let newBoard = copyBoard(board);
    if (
      calculateWinner(newBoard) || // can't place after game over
      calculateSubGameWinner(newBoard[i]) || // can't place on finished board
      newBoard[i][j] || // can't place on taken square
      !isTargetBoard(newBoard, lastMove, i) // can't place if not the target board
    ) {
      return;
    }
    newBoard[i][j] = xIsNext ? "X" : "O";
    toggleXIsNext();
    setLastMove([i, j]);
    setBoard(newBoard);
  }

  function renderSubGame(i) {
    return (
      <SubGame
        squares={board[i]}
        onClick={j => clickSquare(i, j)}
        active={
          !winner &&
          isTargetBoard(board, lastMove, i) &&
          !subBoardFull(board[i])
        }
        lastMove={lastMove && lastMove[0] === i ? lastMove[1] : null}
      />
    );
  }

  return (
    <>
      <div className="game">
        <div className="meta-board">
          {winner && <div className="meta-winner-overlay">{winner}</div>}
          <div className="meta-board-row">
            {renderSubGame(0)}
            {renderSubGame(1)}
            {renderSubGame(2)}
          </div>
          <div className="meta-board-row">
            {renderSubGame(3)}
            {renderSubGame(4)}
            {renderSubGame(5)}
          </div>
          <div className="meta-board-row">
            {renderSubGame(6)}
            {renderSubGame(7)}
            {renderSubGame(8)}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setBoard(emptyBoard);
          setXIsNext(true);
          setLastMove(null);
        }}
      >
        Reset
      </button>
      <div>Next move: {xIsNext ? "X" : "O"}</div>
    </>
  );
}
