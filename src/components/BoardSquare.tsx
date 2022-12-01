import Grid from "./Grid";
import { possibleToMove } from "../Chess";
import SquareBox from "./SquareBox";
import './Style.css';

interface BoardSquareType{
  x: number,
  y: number,
  children: any
}

const BoardSquare = ({ x, y, children }: BoardSquareType) => {

  return (
    <div className="squareBoard">
      <Grid x={x} y={y}>{children}</Grid>
      {
        possibleToMove(x, y) && <SquareBox x={x} y={y} color="green" />
      }
    </div>
  );
};
export default BoardSquare;
