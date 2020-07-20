import React from 'react'
import Model from 'src/models/Model'
import Icon from 'src/models/Icon'

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
