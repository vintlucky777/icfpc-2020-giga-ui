import React from 'react'
import PrettyLine from 'src/components/PrettyLine'
import { subVec, toPolarCoords, fromPolarCoords, addVec } from 'src/utils/vector'


export default function LaserBeam({fromVec, toVec, seed=0}) {
  const dirVec = subVec(toVec, fromVec)
  const polarDir = toPolarCoords(dirVec)
  const [len, and] = polarDir
  const sparkles = _.times(10, (idx) => {
    const d_ang = 0.75*(Math.random() - 0.5)
    const sparkle_len = len / (3 + Math.abs(d_ang)*15) + 3*(Math.random() - 0.5)
    const sparkleToVec = fromPolarCoords(sparkle_len, polarDir[1] + d_ang)
    const intensity = 0.6 + Math.random() * 0.3
    const color = `hsla(200, 100%, ${intensity*100}%, 50%)`
    const width = 0.3 + 0.3*Math.random()
    return (
      <PrettyLine
        key={idx}
        fromVec={fromVec}
        toVec={addVec(fromVec, sparkleToVec)}
        width={width}
        color={color}
      />
    )
  })
  return (
    <g data-type='sprite laser-beam'>
      <PrettyLine fromVec={fromVec} toVec={toVec} width={2} color='hsla(200, 100%, 50%, 25%)'/>
      <PrettyLine fromVec={fromVec} toVec={toVec} width={1.6} color='hsla(200, 100%, 50%, 35%)'/>
      <PrettyLine fromVec={fromVec} toVec={toVec} width={1.0} color='hsla(200, 100%, 50%, 50%)'/>
      <PrettyLine fromVec={fromVec} toVec={toVec} width={0.6} color='hsla(50, 100%, 75%, 90%)'/>
      {/* Sparkles */}
      {/*sparkles*/}
    </g>
  )
}
