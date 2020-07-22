import React, { useMemo } from 'react'
import RectLamp from './RectLamp'

export default function RimLight({segments=6, position, rotation, radius, zOffset, renderLightPlane=false, ...lampProps}) {
  const lightParams = useMemo(() => {
    return _.map(_.range(segments), (idx) => {
      const angle = 2*Math.PI*(idx/segments)
      const angleSin = Math.sin(angle)
      const angleCos = Math.cos(angle)
      const pitchAngle = -Math.PI/2 + Math.atan(zOffset/radius)
      return {
        position: [-radius*angleSin, radius*angleCos, 0],
        rot: angle,
        pitch: pitchAngle,
      }
    })
  }, [segments, radius, zOffset])

  return (
    <group name='rim-light' position={position} rotation={rotation} >
      <group name='rim-light-group' position-z={zOffset}>
        {_.map(lightParams, (light, idx) => (
          <group key={idx} position={light.position} rotation-z={light.rot}>
            <RectLamp rotation-x={light.pitch} renderLightPlane={renderLightPlane} {...lampProps} />
          </group>
        ))}
      </group>
    </group>
  )
}
