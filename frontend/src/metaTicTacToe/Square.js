import React from "react";
import classNames from "classnames";

export default function Square({ onClick, value, highlight }) {
  return (
    <button
      className={classNames("square", { red: highlight })}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
