import React from "react";
import Square from "./Square";
import { calculateSubGameWinner } from "./winner";

export default function SubGame({ squares, onClick, lastMove, active }) {
  const winner = calculateSubGameWinner(squares);

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        highlight={lastMove === i}
      />
    );
  }

  return (
    <div className="sub-board">
      {winner && <div className="sub-winner-overlay">{winner}</div>}
      {(!active || winner) && <div className="disabled"></div>}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
