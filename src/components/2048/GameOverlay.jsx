import React from "react";
import TryAgainGif from "/2048/try-again.gif";

export const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={TryAgainGif}
          alt="Try Again"
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
        />
      </div>
    );
  }
  return null;
};
