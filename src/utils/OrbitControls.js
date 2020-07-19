import React, { useState, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'src/utils/Controls'

export default function CameraControls() {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const [controls, setControls] = useState()
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useEffect(() => {
    setControls(new OrbitControls(camera, domElement))
  }, [])
  useFrame(() => {
    controls.update()
  })
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
}
