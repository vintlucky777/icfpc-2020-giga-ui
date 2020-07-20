import React from 'react'
import Model from 'src/models/Model'
import Icon3D from 'src/components/Icon3D'

function Defender({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const modelScale = 0.006
  return (
    <group name='defender' position={[x, y, 0]}>
    <Icon3D
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
