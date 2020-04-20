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
  
  });

  return { position, direction }
}

export default useHeroMoviment;