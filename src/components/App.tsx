import React,{useState} from 'react';
import Board from './Board';
import { GAME_SIZE } from '../settings/constants';
import './App.css';
import Debugger from './Debugger';
import CanvasProvider from '../contexts/canvas';
import { ChestsProvider } from '../contexts/chests';

function App() {
  const [clicked, setCliked] = useState(false);

  function handleClick() {
    setCliked(!clicked);
  }

  return (
    <div className="App">
      <div 
        style= {{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
        >

        <div style= {{
          position: 'absolute',
          left: '830px',
          margin: 0,
          zIndex: 4
        }}>
          <button style= {{
            width: '130px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: '#B11623',
            color: 'white',
            fontSize: '20px',
            zIndex: 4
          }} 
            onClick= {handleClick}
          >
              DEBUG</button>
        </div>

        <CanvasProvider>
          <ChestsProvider>
            {clicked === true ?<Debugger/> :null}
            <Board/>
          </ChestsProvider>
        </CanvasProvider>
      </div>
    </div>
  );
}

export default App;
