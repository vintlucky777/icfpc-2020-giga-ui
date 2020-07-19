import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useLoader, useThree, useFrame, extend as extendThreeFiber } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extendThreeFiber({ OrbitControls })

function ModelPlaceholder(props) {
  // return <React.Fragment />
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

function ModelLoaded({ src, ...otherProps }) {
  const ref = useRef()
  const model = useLoader(GLTFLoader, `${src}/scene.gltf`)
  useEffect(() => {
    ref.current.children.push(model.scene)
  }, [ref])
  return (
    <group ref={ref} {...otherProps} />
  )
}

function Model(props) {
  // return <ModelPlaceholder />
  return (
    <Suspense fallback={<ModelPlaceholder />}>
      <ModelLoaded {...props} />
    </Suspense>
  )
}

function Attacker({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const group = useRef()
  useFrame(() => {
    group.current.rotation.y += 0.004;
  });
  return (
    <group ref={group} position={[x, y, 0]}>
      <Model
        src='/assets/models/attacker'
        position={[0, 0, 0]}
      />
    </group>
  );
}

function Defender({ position, velocity }) {
  const [x, y] = position
  const [vx, vy] = velocity
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.004;
  });
  return (
    <group ref={group} position={[x, y, 0]}>
      <Model
        src='/assets/models/defender'
        position={[0, 0, 0]}
        scale={[0.25, 0.25, 0.25]}
      />
    </group>
  );
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
}

function initialConfig({ camera, gl }) {
  debugger
  camera.far = 10000
  camera.updateProjectionMatrix()
}

function InitialConfig({config}) {
  const THREE = useThree()
  useEffect(() => {
    config(THREE)
  }, [])
  return <React.Fragment/>
}

function SceneLights() {
  return (
    <React.Fragment>
      <directionalLight intensity={2} />
      <ambientLight intensity={0.5} />
    </React.Fragment>
  )
}

function Battlefield({attacker, defender}) {
  return (
    <Canvas
      style={{ background: "#171717", width: '100vw', height: '100vh' }}
    >
      <CameraControls />
      <InitialConfig config={initialConfig} />
      <SceneLights />
      <Defender position={[0, 0]} velocity={[0, 0]} />
    </Canvas>
  )
}

export default Battlefield
