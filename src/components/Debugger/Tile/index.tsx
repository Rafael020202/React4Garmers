import React from 'react';

export default function Tile({x, y, text}) {
  function getColor() {
    switch(text) {
      case 0: 
        return 'yellow';
      case 1:
        return 'red';
    }
  }

  const color = getColor();
  
  return(
    <div style={{
      width: '48px', 
      height: '48px', 
      border: `2px solid ${color}`,
      color: `${color}`,
      position: 'absolute',
      top: 48 * y,
      left: 48 * x,
    }}>{text}</div>
  );
}

