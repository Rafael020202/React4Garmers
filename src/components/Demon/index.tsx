import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import './index.css'

const inicialPosition = { x: 7, y: 5 };

export default function Demon() {
  const { position, direction } = useEnemyMoviment(inicialPosition);
  
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
      }}
    />
  )
}