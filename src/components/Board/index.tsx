import React, { useContext } from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import {GAME_SIZE} from '../../settings/constants';
import { canvas, ECanvas } from '../../contexts/canvas/helpers';
import { ChestsContext } from '../../contexts/chests';

function getCanvasMap() {
  const tiles = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasX = canvas[y];

    for (let x = 0; x < canvasX.length; x++) {
      const key = `${x}-${y}`;
      const txt = canvas[y][x]; 


      if(txt === ECanvas.HERO){
        tiles.push(<Hero x={x} y={y} key={key}/>);
      }

      if(txt === ECanvas.TRAP){
        tiles.push(<Trap x={x} y={y} key={key}/>);
      }

      if(txt === ECanvas.MINI_DEMON) {
        tiles.push(<MiniDemon x={x} y={y} key={key}/>);
      }

      if(txt === ECanvas.DEMON) {
        tiles.push(<Demon x={x} y={y} key={key}/>);
      }

      if(txt === ECanvas.CHEST) {
        tiles.push(<Chest x={x} y={y} key={key}/>);
      }

    }
  }
 
  return tiles;
}

const render = getCanvasMap();

export default function Board() {
  const chestContext = useContext(ChestsContext);
  
  return (
    <>
      {render}
      {chestContext.openedChests.total === 2 ?
      <img src="./assets/DOOR-OPEN.png" alt="door-open" style={{
        position: 'absolute',
        left: '575px'
      }}/>
      : null
    }
      
      <img src="./assets/tileset.gif" alt="board" width={GAME_SIZE} height={GAME_SIZE}/> 
    </>
  )
}

