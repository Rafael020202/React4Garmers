import { EDirection, EWalker } from "../../settings/constants";

export function handleMoviment(direction, position) {
  switch (direction) {
    case EDirection.DOWN:
      return {y: position.y+1, x: position.x};
    
    case EDirection.UP:
      return {y: position.y-1, x: position.x};

    case EDirection.LEFT:
        return {y: position.y, x: position.x-1};

    case EDirection.RIGHT:
        return {y: position.y, x: position.x+1};
  }
}

export enum ECanvas{
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,  
  TRAP = 3, 
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7
}

const { FLOOR: FL, 
  WALL: WA, 
  DOOR: DO, 
  TRAP: TR, 
  MINI_DEMON: MD, 
  DEMON: DM, 
  CHEST: CH, 
  HERO: HE } = ECanvas;

export const canvas = [
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA],
  [WA,FL,FL,WA,FL,FL,FL,FL,WA,FL,FL,FL,FL,DO,DO,FL,WA,FL,FL,WA],
  [WA,FL,FL,WA,FL,FL,FL,FL,WA,FL,FL,FL,FL,FL,FL,FL,WA,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,DM,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,TR,FL,CH,FL,FL,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,MD,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,MD,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,HE,WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WA],
  [WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA,WA],
];

export function checkValidMoviment(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];
  const result = walker === EWalker.HERO 
  ?getHeroValidMoves(canvasValue)  
  :getEnemyValidMoves(canvasValue);

  return result;
}

function getHeroValidMoves(canvasValue) {
  return {
    valid:  canvasValue === ECanvas.FLOOR || 
            canvasValue === ECanvas.CHEST || 
            canvasValue === ECanvas.DEMON || 
            canvasValue === ECanvas.MINI_DEMON || 
            canvasValue === ECanvas.DOOR ||
            canvasValue === ECanvas.TRAP,
    
    dead: canvasValue === ECanvas.DEMON || 
          canvasValue === ECanvas.MINI_DEMON ||
          canvasValue === ECanvas.TRAP,

    door: canvasValue === ECanvas.DOOR,
    
    chest: canvasValue === ECanvas.CHEST,
  };
}

function getEnemyValidMoves(canvasValue) {
  return {
    valid: canvasValue === ECanvas.HERO || canvasValue === ECanvas.FLOOR,
    dead: canvasValue === ECanvas.HERO,
    chest: false,
    door: false
  };
}