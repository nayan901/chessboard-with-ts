import BoardSquare from "./BoardSquare";
import Knight from "./Knight";
import './Style.css';

interface BoardType {
  knightPosition: [
    knightX: Number,
    knightY: Number
  ]
}

const CBoard = ({ knightPosition: [knightX, knightY] }: BoardType) => {
  const Squares = (i:number) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    
    return (
      <div key={i} className="squares">
        <BoardSquare x={x} y={y}>
          {changeKnight(x, y)}
        </BoardSquare>
      </div>
    );
  };
  const changeKnight = (x:number, y:number) => {
    const isKnightHere = knightX === x && knightY === y;
    return isKnightHere ? <Knight /> : null;
  };
  const squares = Array.from(new Array(64), (element, index) =>
    Squares(index)
  );
  return <div className="board">{squares}</div>;
};
export default CBoard;
