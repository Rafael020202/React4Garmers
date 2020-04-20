import { useState } from 'react';
import { EDirection } from '../../settings/constants';
import { handleMoviment } from '../../contexts/canvas/helpers';
import useInterval from '@use-it/interval';

function useEnemyMoviment(initialPosition) {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState('RIGHT');

  useInterval(function move() {
    const moviment = Object.values(EDirection);
    const index = Math.floor(Math.random() * 3);
    
    setPosition(handleMoviment(moviment[index],position));
    setDirection(moviment[index]);
  }, 1000);

  return { position, direction }
}

export default useEnemyMoviment;