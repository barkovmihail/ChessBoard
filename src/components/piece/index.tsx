import React, { FC } from "react";
import { PieceColorType } from "../../enums/colorType";
import { PieceType } from "../../enums/pieceType";
import { chars, defaultBoxSize, numbers } from "../board";
import { px } from "../helpers/styles";

import "./index.css";

const defaultStep = defaultBoxSize / 8;

export interface IPieceProps {
  color: PieceColorType;
  type: PieceType;
  position: string;
}

const Piece: FC<IPieceProps> = (p: IPieceProps) => {
  const stylePosition = (): React.CSSProperties => ({
    transform: `translate(${px(
      defaultStep * chars.indexOf(p.position.substring(1, 2))
    )}, ${px(defaultStep * numbers.indexOf(p.position.substring(0, 1)))})`,
  });

  return (
    <div className={`piece ${p.color} ${p.type}`} style={stylePosition()}></div>
  );
};

export default Piece;
