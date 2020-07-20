import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { Vector3 } from 'three'

const HEIGHT = 350
const TILT_OFFSET = 150
const defaultPosition = new Vector3(0, HEIGHT, TILT_OFFSET)

export function TopDownCamera({position, ...props}) {
  const { setDefaultCamera } = useThree()
  const ref = useRef()

  const [x, y] = position

  // Make the camera known to the system
  useEffect(() => {
    const camera = ref.current
    setDefaultCamera(camera)
    camera.position.set(0, HEIGHT, TILT_OFFSET)
    camera.lookAt(0, 0, 0)
    camera.setFocalLength(57)
  }, [])
  useEffect(() => {
    const camera = ref.current
    camera.position.copy(defaultPosition)
    camera.position.x += x
    camera.position.z += y
  }, [x, y])
  // Update it every frame
  useFrame(() => {
    ref.current.updateMatrixWorld()
  })
  return <perspectiveCamera ref={ref} {...props} />
}
