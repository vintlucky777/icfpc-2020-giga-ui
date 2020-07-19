import React, { Suspense, useRef, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export function ModelPlaceholder(props) {
  // return <React.Fragment />
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
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

export default Model
