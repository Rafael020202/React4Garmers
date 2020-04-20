import React from 'react';
import Board from './Board';
import { GAME_SIZE } from '../settings/constants';
import './App.css';
import Debugger from './Debugger';

function App() {
  return (
    <div className="App">
      <div 
        style= {{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <Debugger/>
        <Board/>
      </div>
    </div>
  );
}

export default App;
