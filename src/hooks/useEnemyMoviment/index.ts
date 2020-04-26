import { useState, useContext } from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import useInterval from '@use-it/interval';
import { CanvasContext } from '../../contexts/canvas';

function useEnemyMoviment(initialPosition) {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState('RIGHT');
  const canvas = useContext(CanvasContext);

  useInterval(function move() {
    const array = Object.values(EDirection);
    const index = Math.floor(Math.random() * 4);

    const {moviment, nextMove} = 
    canvas.updateCanvas(array[index], position, EWalker.ENEMY);

    if(nextMove.valid) {
      setPosition(moviment);
      setDirection(moviment[index]);
    }

    if(nextMove.dead) {
      setTimeout(() => {
        alert('você morreu');
      })

      window.location.reload();
    }

  }, 1000);

  return { position, direction }
}

export default useEnemyMoviment;