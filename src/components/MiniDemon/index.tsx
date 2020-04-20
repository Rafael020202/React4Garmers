import React from 'react';
import {TILE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import './index.css'

const inicialPosition = { x: 5, y: 5 };

export default function MiniDemon() {
  const { position, direction } = useEnemyMoviment(inicialPosition);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demon-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
      }}
    />
  )
}