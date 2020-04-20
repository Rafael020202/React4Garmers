import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';
import { EDirection } from '../../settings/constants';
import { handleMoviment } from '../../contexts/canvas/helpers';


function useHeroMoviment() {
  const [position, setPosition] = useState({x: 8, y: 3});
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener('keydown',(e: React.KeyboardEvent) => {
  
    const values = Object.values(EDirection); 
    if(values.find(i => i === e.key)) {
      setPosition(handleMoviment(e.key, position));
      setDirection(e.key as EDirection);
    }

    // if(e.key === EDirection.UP) {
    //   setPosition({y: position.y+1, x: position.x});
    // }
    
    // else if(e.key === EDirection.DOWN) {
    //   setPosition({y: position.y-1, x: position.x});
    // }

    // else if(e.key === EDirection.RIGHT) {
    //   setPosition({y: position.y, x: position.x+1});
    //   setDirection(EDirection.RIGHT);
    // }

    // else if(e.key === EDirection.LEFT) {
    //   setPosition({y: position.y, x: position.x-1});
    //   setDirection(EDirection.LEFT);
    // }
  });

  return { position, direction }
}

export default useHeroMoviment;