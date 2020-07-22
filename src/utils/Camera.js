import React, { useRef } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { Vector3 } from 'three'
import { a } from 'react-spring/three'
import { OrbitControls, MapControls } from 'three/examples/jsm/controls/OrbitControls'
import ApplyConfig from './ApplyConfig'

const DEFAULT_POSITION = new Vector3(0, 350, 150)

extend({ OrbitControls, MapControls })

export function TopDownCamera({focusPosition=null, focusAt=null, ...props}) {
  const { camera, gl: { domElement } } = useThree()
  const controlsRef = useRef()

  const setupCamera = ({ camera }) => {
    camera.position.copy(DEFAULT_POSITION)
    camera.lookAt(0, 0, 0)
    camera.setFocalLength(57)
    camera.setFocalLength(57)
    camera.updateMatrixWorld()
  }

  // useEffect(() => {
  //   const camera = cameraRef.current
  //   setDefaultCamera(camera)
  //   camera.position.set(0, HEIGHT, TILT_OFFSET)
  //   camera.lookAt(0, 0, 0)
  //   camera.setFocalLength(57)
  // }, [])
  useFrame(() => {
    controlsRef.current.update()
  })
  return (
    <a.group name='top-down-camera'>
      {/* <a.perspectiveCamera ref={cameraRef} position={cameraZoomedPosition} /> */}
      <ApplyConfig config={setupCamera} />
      <mapControls ref={controlsRef} args={[camera, domElement]} />
    </a.group>
  )
}
