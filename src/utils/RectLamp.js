import React from 'react'
import { FrontSide, DoubleSide } from 'three'


export default function RectLamp({renderLightPlane=true, doubleSidedPlane=false, color='#fff', intensity=1, width=1, height=1, ...otherProps}) {
  return (
    <rectAreaLight
      name='rect-lamp'
      color={color}
      width={width}
      height={height}
      intensity={intensity}
      {...otherProps}
    >
      {renderLightPlane && (
        <mesh rotation={[Math.PI, 0, 0]}>
          <planeGeometry
            attach='geometry'
            args={[width, height]}
          />
          <meshBasicMaterial
            attach='material'
            color={color}
            side={doubleSidedPlane ? DoubleSide : FrontSide}
          />
        </mesh>
      )}
    </rectAreaLight>
  )
}
