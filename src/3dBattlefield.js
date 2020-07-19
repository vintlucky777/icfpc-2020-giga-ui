import React from 'react'
import { Canvas, extend as extendThreeFiber, useFrame } from 'react-three-fiber'
import ApplyConfig from "src/utils/ApplyConfig"
import { OrbitControls } from "src/utils/Controls"
import NoSSR from "src/utils/NoSSR"

import Defender from 'src/models/Defender'
import Attacker from 'src/models/Attacker'

// extendThreeFiber({ OrbitControls })

function initialConfig({ camera, gl } = THREE) {
  const controls = new OrbitControls(camera, gl.domElement)
  useFrame(() => {
    controls.update()
  })
  camera.far = 10000
  camera.updateProjectionMatrix()
}

function Battlefield({attacker, defender}) {
  return (
    <NoSSR>
      <Canvas
        style={{ background: "#171717", width: '100vw', height: '100vh' }}
      >
        <ApplyConfig config={initialConfig} />

        <directionalLight intensity={2} />
        <ambientLight intensity={0.5} />

        <Defender position={[0, 0]} velocity={[0, 0]} />
      </Canvas>
    </NoSSR>
  )
}

export default Battlefield
