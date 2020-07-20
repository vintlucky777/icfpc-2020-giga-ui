import React, { Suspense, useRef, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import GLTFLoader from 'three-gltf-loader'
import { Box } from 'src/models/Primitives'

export function ModelPlaceholder({src, ...props}) {
  return (
    <Box name={`placeholder ${src}`} size={1} {...props} />
  )
}

function ModelLoaded({ src, ...otherProps }) {
  const model = useLoader(GLTFLoader, `${src}/scene.gltf`)
  return (
    <primitive object={model.scene} rotation={[-Math.PI/2, 0, 0]} dispose={null} {...otherProps} />
  )
}

function Model(props) {
  return (
    <Suspense fallback={<ModelPlaceholder />}>
      <ModelLoaded {...props} />
    </Suspense>
  )
}

export default Model
