import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'

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
