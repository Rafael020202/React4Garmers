import React from 'react';
import Hero from '../Hero';
import {GAME_SIZE} from '../../settings/constants';

export default function Board() {
  return (
    <>
      <Hero />
      <img src="./assets/tileset.gif" alt="board" width={GAME_SIZE} height={GAME_SIZE}/> 
    </>
  )
}