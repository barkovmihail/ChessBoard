import React from "react";
import Board from "../board";
import { defaultBoardPosition } from "../helpers/game";
import Piece from "../piece";

import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Board>
        {defaultBoardPosition.map((it) => (
          <Piece
            key={it.position}
            color={it.color}
            type={it.type}
            position={it.position}
          />
        ))}
      </Board>
    </div>
  );
};

export default App;
