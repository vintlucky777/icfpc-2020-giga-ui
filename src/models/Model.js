import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Box } from 'src/models/Primitives'
import { a } from 'react-spring/three'

export function ModelPlaceholder({src, ...props}) {
  return (
    <Box name={`placeholder ${src}`} size={1} {...props} />
  )
}

function ModelLoaded({ src, ...otherProps }) {
  const model = useLoader(GLTFLoader, `${src}/scene.gltf`)
  return (
    <a.primitive object={model.scene} rotation={[-Math.PI/2, 0, 0]} dispose={null} {...otherProps} />
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
