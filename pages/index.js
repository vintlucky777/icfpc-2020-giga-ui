import React, { useState } from 'react'
import Head from 'next/head'
import NoSSR from 'src/utils/NoSSR'
import Battlefield from 'src/Battlefield'
import Battlefield3D from 'src/Battlefield3D'
import { BATTLEFIELD_SIZE as SIZE, PIXEL_SIZE } from 'src/constants'

const startGameState = {
  attacker: {
    position: [-36, -10],
    velocity: [0, 0],
    thrust: [0, 0],
    stats: [100, 0, 0, 1],
  },
  defender: {
    position: [36, 10],
    velocity: [0, 0],
    thrust: [0, 0],
    stats: [100, 0, 0, 1],
  },
  planetSize: 8,
  rays: [],
}

export default function Home() {
  const [mode3D, setMode3D] = useState(false)
  return (
    <div className="app">
      <Head>
        <title>GIGA - Galaxy Invasion Graphical Analyzer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {mode3D
        ? (
          <div className="battlefield3d_wrapper">
            <Battlefield3D gameState={startGameState} />
          </div>
          )
        : (
          <div className="battlefield_wrapper">
            <Battlefield gameState={startGameState} />
          </div>
          )
      }

      <div className='control_panel'>
        <button
          onClick={() => setMode3D(!mode3D)}
        >
          Switch to {mode3D ? '2D' : '3D'}
        </button>
      </div>


      <style jsx global>{`
        html,
        body {
          background-color: #222;
          font-size: 16px;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
        }
        .control_panel {
          position: fixed;
          right: 1rem;
          top: 1rem;
          background: #33333388;
          padding: 1em;
          max-width: 16rem;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .battlefield_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          min-height: ${(SIZE * 2) * PIXEL_SIZE}px;
          min-width: ${(SIZE * 2) * PIXEL_SIZE}px;
        }
        .battlefield3d_wrapper {
          height: 100vw;
          max-height: 100vh;
        }
      `}</style>
    </div>
  )
}
