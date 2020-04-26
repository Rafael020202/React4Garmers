import React,{useState, createContext} from 'react';

export const ChestsContext = createContext({
  totalChests: 0,
  openedChests: {
    total: 0,
    positions: [],
  },
  updateOpenedChests: (position) => null
}); 


export function ChestsProvider(props) {
  const [chestsState, updateChestsState] = useState({
    totalChests: 2,
    openedChests: {
      total: 0,
      positions: [],
    },
    updateOpenedChests: (position) => {
      updateChestsState((prevSatate) => {
        return {
          totalChests: prevSatate.totalChests,
          openedChests: {
            total: prevSatate.openedChests.total + 1,
            positions: [...prevSatate.openedChests.positions, position],
          },
          updateOpenedChests: prevSatate.updateOpenedChests
        }
      });
    }

  });
  
  return (
    <ChestsContext.Provider value={chestsState}>
      {props.children}
    </ChestsContext.Provider>
  );
}

