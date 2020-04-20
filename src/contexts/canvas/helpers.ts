import { EDirection } from "../../settings/constants";

export function handleMoviment(direction, position) {
  switch (direction) {
    case EDirection.UP:
      return {y: position.y+1, x: position.x};
    
    case EDirection.DOWN:
      return {y: position.y-1, x: position.x};

    case EDirection.LEFT:
        return {y: position.y, x: position.x-1};

    case EDirection.RIGHT:
        return {y: position.y, x: position.x+1};
  }
}