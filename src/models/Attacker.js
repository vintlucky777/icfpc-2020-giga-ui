import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'
import RimLight from 'src/utils/RimLight'
import { a, useSpring } from 'react-spring/three'

// Original Model taken from public Sketchfab assets:
// https://sketchfab.com/3d-models/intergalactic-spaceship-only-model-d36e54a3118744c8ba1a4a47b408b659
//
// note: texture quality reduced to 2048 for memory efficiency

function Attacker({ position, velocity, ...props }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const modelScale = 1.2
  const animPos = useSpring({ to: { x, y } })
  return (
    <React.Fragment>
      <Icon
        position={[x, y, 0]}
        color='#f20'
        pattern={[
          'XX XX',
          'XXXXX',
          ' XXX ',
          'XXXXX',
          'XX XX',
        ]}
      />
      <a.group name='attacker' position-x={animPos.x} position-y={animPos.y}>
        <RimLight
          position-z={-5}
          segments={7}
          zOffset={-1.5}
          radius={7}
          width={5.1}
          height={1.45}
          intensity={1.6}
          color='#f20'
        />
        <Model
          rotation-y={0}
          src='/assets/models/attacker'
          position={[0, 0, -5]}
          scale={[modelScale, modelScale, modelScale]}
          {...props}
        />
      </a.group>
    </React.Fragment>
  )
}

export default Attacker
