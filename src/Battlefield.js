import React from 'react'
import { gameState, getGameState } from 'src/galaxy'
import SvgCanvas from 'src/components/SvgCanvas'

import PixelLine from 'src/components/PixelLine'
import PixelPath from 'src/components/PixelPath'
import Planet from 'src/components/Planet'
import Defender from 'src/components/Defender2d'
import Attacker from 'src/components/Attacker2d'
import LaserBeam from 'src/components/LaserBeam'


function Battlefield(props) {
  // const gameState = getGameState()
  const {attacker, defender, planetSize} = gameState
  return (
    <SvgCanvas>
      <Planet radius={planetSize} colorIndex={1} />
      <Attacker {...attacker} />
      <Defender {...defender} />
      {/* Golden Beam */}
      <PixelLine
        color='gold'
        x1={defender.position[0]}
        y1={defender.position[1]}
        x2={attacker.position[0]}
        y2={attacker.position[1]}
      />
      {/* Some Symbol */}
      <PixelPath
        color='blue'
        points={[
          [0, 0],
          [1, -1],
          [2, 1],
          [0, 2],
          [-2, 1],
          [-2, -1],
          [0, -3],
          [3, -4],
        ]}
      />

      {/* <LaserBeam
        fromVec={defender.position}
        toVec={attacker.position}
      /> */}
    </SvgCanvas>
  )
}

export default Battlefield
