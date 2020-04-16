import React from 'react';
import './index.css'

export default function Hero() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 48 * 2,
        left: 48 * 4,
        width: 48,
        height: 100,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite'
      }}
    />
  )
}