import React from 'react'
import SvgCanvas from 'src/components/SvgCanvas'

import PixelLine from './components/PixelLine'
import PixelPath from './components/PixelPath'
import Planet from './components/Planet'
import Defender from 'src/components/Defender2d'
import Attacker from 'src/components/Attacker2d'
import LaserBeam from './components/LaserBeam'


function Battlefield({gameState}) {
  const {attacker, defender, planetSize} = gameState
  // return (
  //   <SvgCanvas>
  //     <Planet radius={3} colorIndex={1} />
  //     <PixelLine
  //       x1={1}
  //       y1={-1}
  //       x2={2}
  //       y2={1}
  //     />
  //   </SvgCanvas>
  // )
  return (
    <SvgCanvas>
      <Planet radius={planetSize} colorIndex={1} />
      <Attacker {...attacker} />
      <Defender {...defender} />
      <PixelLine
        color='gold'
        x1={defender.position[0]}
        y1={defender.position[1]}
        x2={attacker.position[0]}
        y2={attacker.position[1]}
      />
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
      {/*
      <LaserBeam
        fromVec={defender.position}
        toVec={attacker.position}
      />
      */}
    </SvgCanvas>
  )
}

export default Battlefield
