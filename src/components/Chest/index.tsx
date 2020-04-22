import React from 'react';
import {TILE_SIZE} from '../../settings/constants';
import './index.css'

export default function Chest({x,y}) {
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
        animation: 'chest-animation 1.5s steps(3) infinite'
      }}
    />
  )
}