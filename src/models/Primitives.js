import React from 'react'
import { getLinePixels } from 'src/components/PixelLine'
import { getPathPoints } from 'src/components/PixelPath'
import { a } from 'react-spring/three'

export function Square({size=1, materialType='standard', color='white', ...props}) {
  return (
    <a.mesh name='box' {...props}>
      <planeGeometry attach='geometry' args={[size, size]} />
      {materialType == 'basic' && (
        <meshBasicMaterial
          attach='material'
          color={color}
        />
      )}
      {materialType == 'standard' && (
        <meshStandardMaterial
          attach='material'
          color={color}
        />
      )}
    </a.mesh>
  )
}
export function Box({size=1, materialType='standard', color='white', ...props}) {
  return (
    <a.mesh name='box' {...props}>
      <boxGeometry attach='geometry' args={[size, size, size]} />
      {materialType == 'basic' && (
        <meshBasicMaterial
          attach='material'
          color={color}
        />
      )}
      {materialType == 'standard' && (
        <meshStandardMaterial
          attach='material'
          color={color}
        />
      )}
    </a.mesh>
  )
}

export function Sphere({radius=1, segments=32, materialType='standard', color='white', ...props}) {
  return (
    <a.mesh name='box' {...props}>
      <sphereGeometry attach='geometry' args={[radius, segments, segments]} />
      {materialType == 'basic' && (
        <meshBasicMaterial
          attach='material'
          color={color}
        />
      )}
      {materialType == 'standard' && (
        <meshStandardMaterial
          attach='material'
          color={color}
        />
      )}
    </a.mesh>
  )
}


export function Pixel({position, color, colorIndex=0, ...props}) {
  const [x, y] = position
  return <Square name='pixel' materialType='basic' position={[x, y, 0]} rotation-x={Math.PI} size={0.8} color={color} {...props} />
}


export function PixelLine({start, end, color, colorIndex, ...props}) {
  const [x1, y1] = start
  const [x2, y2] = end
  const pixels = getLinePixels(x1, y1, x2, y2)
  return (
    <group name='pixel-line' {...props}>
    {_.map(pixels, (px, idx) => <Pixel key={idx} position={[px[0], px[1]]} color={color} colorIndex={colorIndex} />)}
    </group>
  )
}

export function PixelPath({points, color, colorIndex, ...props}) {
  const pointPairs = getPathPoints(points)
  return (
    <group name='pixel-line' {...props}>
    {_.map(pointPairs, (pair, idx) => <PixelLine key={idx} start={pair[0]} end={pair[1]} color={color} colorIndex={colorIndex} />)}
    </group>
  )
}
