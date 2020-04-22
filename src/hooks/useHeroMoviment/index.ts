import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { handleMoviment, checkValidMoviment } from '../../contexts/canvas/helpers';


function useHeroMoviment({x,y}) {
  const [position, setPosition] = useState({x, y});
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener('keydown',(e: React.KeyboardEvent) => {
  
    const values = Object.values(EDirection); 
    
    if(values.find(i => i === e.key)) {
      const moviment = handleMoviment(e.key, position); 
      
      if(checkValidMoviment(moviment, EWalker.HERO).valid) {
        setPosition(moviment);
        setDirection(e.key as EDirection);
      }
    }
  
  });

  return { position, direction }
}

export default useHeroMoviment;