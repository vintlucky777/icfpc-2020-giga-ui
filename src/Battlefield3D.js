import React from 'react'
import { Canvas } from 'react-three-fiber'
import ApplyConfig from "src/utils/ApplyConfig"
import NoSSR from "src/utils/NoSSR"
import { TopDownCamera } from 'src/utils/Camera'

import Defender from 'src/models/Defender'
import Attacker from 'src/models/Attacker'
import { Box } from 'src/models/Primitives'

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
          <Box position={[0, 0, 0]} />
          <Defender {...defender} />
          <Attacker {...attacker} />
        </group>

        <directionalLight intensity={2} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </NoSSR>
  )
}

export default Battlefield3D
