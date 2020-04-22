import { useState } from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { handleMoviment, checkValidMoviment } from '../../contexts/canvas/helpers';
import useInterval from '@use-it/interval';

function useEnemyMoviment(initialPosition) {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState('RIGHT');

  useInterval(function move() {
    const moviment = Object.values(EDirection);
    const index = Math.floor(Math.random() * 4);
    const nextMoviment = handleMoviment(moviment[index],position); 

    if(checkValidMoviment(nextMoviment, EWalker.ENEMY).valid) {
      setPosition(nextMoviment);
      setDirection(moviment[index]);
    }
  }, 1000);

  return { position, direction }
}

export default useEnemyMoviment;