import React from 'react';
import {TILE_SIZE} from '../../settings/constants';
import './index.css'

export default function Trap({x,y}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * y,
        left: TILE_SIZE * x,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 2s steps(8) infinite'
      }}
    />
  )
}