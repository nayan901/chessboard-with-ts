import { useState, useEffect } from "react";
import CBoard from "./CBoard";
import { newPosition } from "../Chess";
import './Style.css';

const Main = () => {
  const [knightCurrentPos, setKnightCurrentPos] = useState<[Number, Number]>([1, 7]);
  useEffect(() => 
    newPosition((newPos: [Number, Number]) => 
    setKnightCurrentPos(newPos)), 
  []);
  
  return (
    <div className="chessboardWrapper">
      <div className="board-container">
        <CBoard knightPosition={knightCurrentPos} />
      </div>
    </div>
  );
};
export default Main;
