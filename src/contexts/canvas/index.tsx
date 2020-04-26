import React, { createContext, useState } from 'react';
import { canvas, handleMoviment, checkValidMoviment, ECanvas } from './helpers';

export const CanvasContext = createContext({
  canvas: [],
  updateCanvas: (direction, position, walker) => null
});

export default function CanvasProvider(props) {
  const [canvasState, updateCanvasState] = useState({
    canvas,
    updateCanvas: (direction, position, walker) => {
      const moviment = handleMoviment(direction, position); 
      const nextMove = checkValidMoviment(moviment, walker);
      
      if (nextMove.valid) {
        updateCanvasState( (prevState) => {
          const newCanvas = [...prevState.canvas];
          const currentValue = newCanvas[position.y][position.x]; 
          
          newCanvas[position.y][position.x] = ECanvas.FLOOR;
          newCanvas[moviment.y][moviment.x] = currentValue;

          return {
            canvas: newCanvas,
            updateCanvas: prevState.updateCanvas
          };

        });
      }

      return { moviment, nextMove };
    }
  }); 

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  );
}