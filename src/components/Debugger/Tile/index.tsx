import React from 'react';
import { ECanvas } from '../../../contexts/canvas/helpers';

export default function Tile({x, y, text}) {
  function getColor() {
    switch(text) {
      case ECanvas.FLOOR: 
        return 'darkgrey';
      
      case ECanvas.WALL:
        return 'yellow';

      case ECanvas.DOOR:
        return 'white';

      case ECanvas.HERO:
        return 'magenta';

      case ECanvas.TRAP:
        return 'chartreuse';
      
      case ECanvas.CHEST:
        return 'blue';

      case ECanvas.MINI_DEMON:
      case ECanvas.DEMON:
        return 'red';
    }
  }

  const color = getColor();
  
  return(
    <div style={{
      width: '48px', 
      height: '48px', 
      border: `2px solid ${color}`,
      color: `${color}`,
      position: 'absolute',
      top: 48 * y,
      left: 48 * x,
      fontSize: 32,
      zIndex: 2
    }}>{text}</div>
  );
}

