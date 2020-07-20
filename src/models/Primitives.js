import React from 'react'
import { getLinePixels } from 'src/components/PixelLine'
import { getPathPoints } from 'src/components/PixelPath'

export function Box({size=1, color='white', ...props}) {
  return (
    <mesh name='box' {...props}>
      <boxGeometry attach='geometry' args={[size, size, size]} />
      <meshStandardMaterial
        attach='material'
        color={color}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

export function Sphere({size=1, segments=32, color='white', ...props}) {
  return (
    <mesh name='box' {...props}>
      <boxGeometry attach='geometry' args={[size / 2, segments]} />
      <meshStandardMaterial
        attach='material'
        color={color}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}


export function Pixel({position, color, colorIndex=0}) {
  const [x, y] = position
  return <Box name='pixel' position={[x, y, 0]} size={0.85} color={color} />
}


export function PixelLine({start, end, color, colorIndex}) {
  const [x1, y1] = start
  const [x2, y2] = end
  const pixels = getLinePixels(x1, y1, x2, y2)
  return (
    <group name='pixel-line'>
    {_.map(pixels, (px, idx) => <Pixel key={idx} position={[px[0], px[1]]} color={color} colorIndex={colorIndex} />)}
    </group>
  )
}

export function PixelPath({points, color, colorIndex}) {
  const pointPairs = getPathPoints(points)
  return (
    <group name='pixel-line'>
    {_.map(pointPairs, (pair, idx) => <PixelLine key={idx} start={pair[0]} end={pair[1]} color={color} colorIndex={colorIndex} />)}
    </group>
  )
}
