import React from 'react'
import Model from 'src/models/Model'

function Defender({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  return (
    <group position={[x, y, 0]}>
      <Model
        src='/assets/models/defender'
        position={[0, 0, 0]}
      />
    </group>
  );
}

export default Defender
