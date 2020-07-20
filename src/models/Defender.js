import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'

// Original Model taken from public Sketchfab assets:
// https://sketchfab.com/3d-models/raven-spaceship-star-conflict-v2-5edb70fdc0da4e6aa7d96f5f19f7a419

function Defender({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const modelScale = 0.006
  return (
    <group name='defender' position={[x, y, 0]}>
    <Icon
      color={'aqua'}
      pattern={[
        '  X  ',
        ' XXX ',
        'XX XX',
        ' XXX ',
        '  X  ',
      ]}
    />
      <Model
        src='/assets/models/defender'
        position={[0, 0, -5]}
        scale={[modelScale, modelScale, modelScale]}
      />
    </group>
  );
}

export default Defender
