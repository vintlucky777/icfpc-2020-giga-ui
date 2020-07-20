import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'

// Original Model taken from public Sketchfab assets:
// https://sketchfab.com/3d-models/intergalactic-spaceship-only-model-d36e54a3118744c8ba1a4a47b408b659
//
// note: texture quality reduced to 2048 for memory efficiency

function Attacker({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const modelScale = 1
  return (
    <group name='attacker' position={[x, y, 0]}>
      <Icon
        color='#f20'
        pattern={[
          'XX XX',
          'XXXXX',
          ' XXX ',
          'XXXXX',
          'XX XX',
        ]}
      />
      <Model
        src='/assets/models/attacker'
        position={[0, 0, -5]}
        scale={[modelScale, modelScale, modelScale]}
      />
    </group>
  );
}

export default Attacker
