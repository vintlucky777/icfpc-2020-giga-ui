import React from 'react'

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
