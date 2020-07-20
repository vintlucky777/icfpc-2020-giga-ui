import React from 'react'
import { Canvas } from 'react-three-fiber'
import ApplyConfig from "src/utils/ApplyConfig"
import NoSSR from "src/utils/NoSSR"
import { TopDownCamera } from 'src/utils/Camera'

import Defender from 'src/models/Defender'
import Attacker from 'src/models/Attacker'
import { Pixel, PixelLine, PixelPath } from 'src/models/Primitives'
// import Icon from 'src/models/Icon'
import Rectangle from 'src/models/Rectangle'
import BoundingBox from './models/BoundingBox'

// WARNING: Work in Progress!


function initialConfig(THREE) {
  console.log('Initializing...')
  window.Battlefield3D = THREE
  console.log('done!')
}

function Battlefield3D({gameState}) {
  const {attacker, defender, planetSize} = gameState

  return (
    <NoSSR>
      <Canvas
        style={{ background: "#171717", width: '100%', height: '100%' }}
      >
        <TopDownCamera
          position={[0, 0]}
          near={10}
          far={10000}
        />
        <ApplyConfig config={initialConfig} />

        {/* Rotating coords for the scene. Y is ⬇, X is ➡ */}
        <group rotation={[Math.PI/2, 0, 0]} >
          {/* Planet */}
          <Rectangle topLeft={[-planetSize, -planetSize]} bottomRight={[planetSize, planetSize]} color={'#134'} />

          {/* Gravity Edges */}
          <PixelLine start={[-9, -9]} end={[-100, -100]} />
          <PixelLine start={[-9,  9]} end={[-100,  100]} />
          <PixelLine start={[ 9, -9]} end={[ 100, -100]} />
          <PixelLine start={[ 9,  9]} end={[ 100,  100]} />

          {/* Scene Edges */}
          <BoundingBox width={201} height={201} />

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
          {/* Golden Beam */}
          <PixelLine
            color='gold'
            start={defender.position}
            end={attacker.position}
          />

          <Defender {...defender} />
          <Attacker {...attacker} />

        </group>

        <directionalLight intensity={1} />
        <ambientLight intensity={0.75} />
      </Canvas>
    </NoSSR>
  )
}

export default Battlefield3D
