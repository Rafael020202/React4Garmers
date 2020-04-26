import React, { useContext } from 'react';
import {TILE_SIZE} from '../../settings/constants';
import './index.css'
import { ChestsContext } from '../../contexts/chests';

export default function Chest({x,y}) {
  const chestsContext = useContext(ChestsContext);

  const shouldAnimate = chestsContext.openedChests.positions.find((position)=> {
    const match = position.x === x && position.y === y;

    return match;
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * y,
        left: TILE_SIZE * x,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: 'no-repeat',
        animation: shouldAnimate && 'chest-animation 1.5s steps(2) forwards'
      }}
    />
  )
}