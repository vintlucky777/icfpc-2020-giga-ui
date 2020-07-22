import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'
import RimLight from 'src/utils/RimLight'
import { useControl } from 'react-three-gui'
import { a, useSpring } from 'react-spring/three'

// Original Model taken from public Sketchfab assets:
// https://sketchfab.com/3d-models/raven-spaceship-star-conflict-v2-5edb70fdc0da4e6aa7d96f5f19f7a419

function Defender({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const modelScale = 0.006
  const animPos = useSpring({ to: { x, y } })

  // const rotZ = useControl('rotation', { group: 'Defender', spring: true, type: 'number', min: -Math.PI, max: Math.PI })
  // const rimSegments = useControl('rim S', { group: 'Defender', type: 'number', value: 6, min: 4, max: 12 })
  // const rimZOffset = useControl('rim Z', { group: 'Defender', type: 'number', value: 2, min: -5, max: 5 })
  // const rimRadius = useControl('rim R', { group: 'Defender', type: 'number', value: 5.5, min: 3, max: 10 })
  // const rimWidth = useControl('rim W', { group: 'Defender', type: 'number', value: 5, min: 1, max: 15 })
  // const rimHeight = useControl('rim H', { group: 'Defender', type: 'number', value: 1.5, max: 5 })
  // const rimIntensity = useControl('rim I', { group: 'Defender', type: 'number', value: 2, min: 0, max: 10 })
  // const rimColor = useControl('rim color', { group: 'Defender', type: 'color', value: '#0af' })

  return (
    <React.Fragment>
      <Icon
        name='defender-icon'
        position={[x, y, 0]}
        color={'#0af'}
        pattern={[
          '  X  ',
          ' XXX ',
          'XX XX',
          ' XXX ',
          '  X  ',
        ]}
      />
      <a.group name='defender' position-x={animPos.x} position-y={animPos.y}>
        {/* Light configuration rig */}
        {/* <RimLight
          position-z={-5}
          segments={Math.floor(rimSegments)}
          zOffset={-rimZOffset}
          renderLightPlane={true}
          radius={rimRadius}
          width={rimWidth}
          height={rimHeight}
          intensity={rimIntensity}
          color={rimColor}
        /> */}
        <RimLight
          position-z={-5}
          segments={7}
          zOffset={-1.3}
          radius={5.9}
          width={5.1}
          height={1.45}
          intensity={2}
          color='#0af'
        />
        <Model
          src='/assets/models/defender'
          position={[0, 0, -5]}
          scale={[modelScale, modelScale, modelScale]}
        />
      </a.group>
    </React.Fragment>
  );
}

export default Defender
