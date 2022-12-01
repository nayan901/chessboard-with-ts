let knightPosition = [1, 7];
let position: any[] = [];

export function changeKnitePosition() {
  position.forEach(o => o && o(knightPosition));
}

export function newPosition(o:{}) {
  position.push(o);
  return () => {
    position = position.filter(t => t !== o);
  };
}

export function possibleToMove(toX: number, toY:number){
  const [x, y] = knightPosition;
  const cx = toX - x;
  const cy = toY - y;
  if((Math.abs(cx) === 2 && Math.abs(cy) === 1) || (Math.abs(cx) === 1 && Math.abs(cy) === 2)){
    return true
  }else{
    return false
  }
}

export function canMoveKnight(toX: number, toY:number) {
  
  const [x, y] = knightPosition;
  const cx = toX - x;
  const cy = toY - y;
  if((Math.abs(cx) === 2 && Math.abs(cy) === 1) || (Math.abs(cx) === 1 && Math.abs(cy) === 2)){
    knightPosition = [toX, toY];
    changeKnitePosition();
  }else{
    console.log("can not drop here");
  }
}
