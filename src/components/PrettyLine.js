import React from 'react'
import {animated, useSpring} from 'react-spring'

export default function PrettyLine({fromVec, toVec, width=1, color='#fff'}) {
  const [fx, fy] = fromVec
  const [tx, ty] = toVec
  const anim = useSpring({
    fx: fx+0.5,
    fy: fy+0.5,
    tx: tx+0.5,
    ty: ty+0.5,
  })
  return (
    <animated.line
      x1={anim.fx}
      y1={anim.fy}
      x2={anim.tx}
      y2={anim.ty}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
    />
  )
}
