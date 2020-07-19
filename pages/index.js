import React, { useState } from 'react'
import Head from 'next/head'
import NoSSR from 'src/utils/NoSSR'
import Battlefield from 'src/Battlefield'
import { BATTLEFIELD_SIZE as SIZE, PIXEL_SIZE } from 'src/constants'

const startGameState = {
  attacker: {
    position: [-36, -10],
    velocity: [0, 0],
    stats: [100, 0, 0, 1],
  },
  defender: {
    position: [36, 10],
    velocity: [0, 0],
    stats: [100, 0, 0, 1],
  },
  planetSize: 8,
  rays: [],
}

export default function Home() {
  // const [gameState, setGameState] = useState(startGameState)
  return (
    <div className="app">
      <Head>
        <title>GIGA - Galaxy Invasion Graphical Analyzer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="battlefield_wrapper">
        <NoSSR>
          <Battlefield gameState={startGameState} />
          {/* <Battlefield gameState={gameState} setGameState={setGameState}/> */}
        </NoSSR>
      </div>

      <style jsx>{`
        .app {
          min-height: 100vh;
        }
        .battlefield_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          min-height: ${(SIZE * 2) * PIXEL_SIZE}px;
          min-width: ${(SIZE * 2) * PIXEL_SIZE}px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #222;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
