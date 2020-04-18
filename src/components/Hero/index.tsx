import React, { useState } from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../../settings/constants';
import useEventListener from '@use-it/event-listener';
import './index.css'

export default function Hero() {
  const [position, setPosition] = useState({x: 8, y: 3});
  const [direction, setDirection] = useState('RIGHT');

  useEventListener('keydown',(e: React.KeyboardEvent) => {
    
    if(e.keyCode === 38) {
      setPosition({y: position.y+1, x: position.x});
    }
    
    else if(e.keyCode === 40) {
      setPosition({y: position.y-1, x: position.x});
    }

    else if(e.keyCode === 39) {
      setPosition({y: position.y, x: position.x+1});
      setDirection('RIGHT');
    }

    else if(e.keyCode === 37) {
      setPosition({y: position.y, x: position.x-1});
      setDirection('LEFT');
    }

    console.log(e.keyCode);

  });


  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1 })`
      }}
    />
  )
}
