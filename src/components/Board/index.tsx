import React from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import {GAME_SIZE} from '../../settings/constants';

export default function Board() {
  return (
    <>
      <MiniDemon x={5} y={5}/>
      <MiniDemon x={7} y={5}/>
      <Demon/>
      <Trap />
      <Hero />
      <Chest/>
      <img src="./assets/tileset.gif" alt="board" width={GAME_SIZE} height={GAME_SIZE}/> 
    </>
  )
}

