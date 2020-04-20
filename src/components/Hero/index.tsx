import React from 'react';
import {TILE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';
import './index.css'

export default function Hero() {
  const {position, direction} = useHeroMoviment();
  
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
      }}
    />
  )
}
