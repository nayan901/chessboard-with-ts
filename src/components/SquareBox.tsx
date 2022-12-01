import React from "react";
import { canMoveKnight } from "../Chess";

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 1,
} as React.CSSProperties;

interface SquareBoxType{
  x: number,
  y: number,
  color: string
}

const SquareBox = ({ x, y, color }: SquareBoxType) => {
  return (
    <div
      onClick={() => canMoveKnight(x,y)}
      style={{
        ...overlayStyle,
        backgroundColor: color
      }}
    />
  );
};
export default SquareBox;
