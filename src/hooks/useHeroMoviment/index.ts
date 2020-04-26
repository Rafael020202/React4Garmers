import useEventListener from '@use-it/event-listener';
import React, { useState, useContext } from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

function useHeroMoviment({x,y}) {
  const [position, setPosition] = useState({x, y});
  const [direction, setDirection] = useState(EDirection.RIGHT);
  const canvas = useContext(CanvasContext);
  const chest = useContext(ChestsContext);

  useEventListener('keydown',(e: React.KeyboardEvent) => {
    
    const values = Object.values(EDirection); 
    
    if(values.find(i => i === e.key)) {

      const {moviment, nextMove} = 
      canvas.updateCanvas(e.key, position, EWalker.HERO);
      
      if(nextMove.valid) {
        setPosition(moviment);
        setDirection(e.key as EDirection);
      }

      if(nextMove.dead) {
        setTimeout(() => {
          alert('Você morreu')
        });

        window.location.reload();
      }

      if(nextMove.chest) {
        chest.updateOpenedChests(moviment);
      }

      if(chest.totalChests === chest.openedChests.total && nextMove.door) {
        console.log('venceu');
      }

    }
  
  });

  return { position, direction }
}

export default useHeroMoviment;