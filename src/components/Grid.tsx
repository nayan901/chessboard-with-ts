import { canMoveKnight } from "../Chess";
import './Style.css';

interface GridType{
  x: number,
  y: number,
  children: JSX.Element
}


const Grid = ({ x, y, children }: GridType) => {

  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      className="squareGrid"
      onClick={() => canMoveKnight(x,y)}
      style={{
        backgroundColor: fill,
        color: stroke
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
