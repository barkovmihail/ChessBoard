import React, { FC, PropsWithChildren } from "react";
import { px } from "../helpers/styles";

import "./index.css";

export const numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const chars = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const defaultBoxSize = 500;

interface IProps {}

export const Board: FC<PropsWithChildren<IProps>> = (
  p: PropsWithChildren<IProps>
) => (
  <div className="board">
    <div className="numbers">
      {numbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
    <div className="chars">
      {chars.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
    <div
      className="cells"
      style={{
        width: px(defaultBoxSize),
        height: px(defaultBoxSize),
      }}
    >
      {numbers.map((n) => {
        return chars.map((c) => <div key={c + n} className="cell"></div>);
      })}
    </div>
    {p.children}
  </div>
);

export default Board;
