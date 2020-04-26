import React from 'react';
import Tile from './Tile';
import { CanvasContext } from '../../contexts/canvas';

function getCanvasMap(canvas) {
  const tiles = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasX = canvas[y];

    for (let x = 0; x < canvasX.length; x++) {
      const key = `${x}-${y}`;
      
      tiles.push(<Tile x={x} y={y} text={canvas[y][x]} key={key}/>);
    }
  }
 
  return tiles;
}

export default function Debugger() {
  const canvasContext = React.useContext(CanvasContext);
  const tiles = getCanvasMap(canvasContext.canvas); 
  
  return (
    <div>
      {tiles}
    </div>
  );
}
