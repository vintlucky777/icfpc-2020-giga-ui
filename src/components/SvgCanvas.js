import React from 'react'
import { BATTLEFIELD_SIZE as SIZE, PIXEL_SIZE } from 'src/constants'

export default function Canvas({children}) {
  return (
    <svg viewBox={`0 0 ${2*SIZE+1} ${2*SIZE+1}`} style={{
      width: (SIZE * 2) * PIXEL_SIZE,
      height: (SIZE * 2) * PIXEL_SIZE,
      border: '1px solid #ccc',
    }}>
      <g transform={`translate(${SIZE}, ${SIZE})`}>
        {children}
      </g>
    </svg>
  )
}
