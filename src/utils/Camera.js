import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { Vector3 } from 'three'
import { useControl } from 'react-three-gui'
import { BATTLEFIELD_SIZE } from 'src/constants'
import { a } from 'react-spring/three'

const HEIGHT = 350
const TILT_OFFSET = 150
const defaultPosition = new Vector3(0, HEIGHT, TILT_OFFSET)

export function TopDownCamera({position=[0, 0], focusAt=null, focusPosition=null, ...props}) {
  const { setDefaultCamera } = useThree()
  const ref = useRef()
  const cameraPosX = useControl('x', {
    group: 'Camera Controls',
    type: 'number',
    spring: true,
    scrub: true,
    distance: BATTLEFIELD_SIZE / 2,
    min: -BATTLEFIELD_SIZE / 2,
    max: BATTLEFIELD_SIZE / 2,
  })
  const cameraPosY = useControl('y', {
    group: 'Camera Controls',
    type: 'number',
    spring: true,
    scrub: true,
    distance: BATTLEFIELD_SIZE / 2,
    min: -BATTLEFIELD_SIZE / 2,
    max: BATTLEFIELD_SIZE / 2,
  })
  const zoom = useControl('zoom', {
    group: 'Camera Controls',
    type: 'number',
    value: 1,
    min: 1,
    max: 7,
    spring: true,
  })

  const [x, y] = position

  // Make the camera known to the system
  useEffect(() => {
    const camera = ref.current
    setDefaultCamera(camera)
    camera.position.set(0, HEIGHT, TILT_OFFSET)
    camera.lookAt(0, 0, 0)
    camera.setFocalLength(57)
  }, [])
  useFrame(() => {
    ref.current.updateMatrixWorld()
  })
  const cameraZoomedPosition = zoom.interpolate(z => new Vector3().copy(defaultPosition).multiplyScalar(1/z))
  return (
    <a.group position-x={cameraPosX} position-z={cameraPosY} name='top-down-camera'>
      <a.perspectiveCamera ref={ref} position={cameraZoomedPosition} />
    </a.group>
  )
}
