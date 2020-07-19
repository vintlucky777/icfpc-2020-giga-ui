import React, { useEffect } from 'react'
import { useThree } from 'react-three-fiber'

export default function ApplyConfig({config}) {
  const THREE = useThree()
  useEffect(() => {
    config(THREE)
  }, [])
  return <React.Fragment/>
}
