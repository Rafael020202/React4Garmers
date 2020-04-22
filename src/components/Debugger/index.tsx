import React from 'react';
import Tile from './Tile';
import { canvas } from '../../contexts/canvas/helpers';

function getCanvasMap() {
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
  const tiles = getCanvasMap(); 
  
  return (
    <div>
      {tiles}
    </div>
  );
}
