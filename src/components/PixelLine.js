import React from 'react'
import _ from 'lodash'
import Pixel from 'src/components/SvgPixel'

export function getLinePixels(x1, y1, x2, y2) {
  const lineHeight = Math.abs(y1-y2)
  const lineWidth = Math.abs(x1-x2)
  let pixelsToDraw, startx, starty, endx, endy
  if (lineWidth >= lineHeight) {
    pixelsToDraw = lineWidth
    endx = x2 > x1 ? x2 : x1
    endy = x2 > x1 ? y2 : y1
    startx = x2 > x1 ? x1 : x2
    starty = x2 > x1 ? y1 : y2
    const lineFn = (x) => Math.round(endy * (x - startx) / (endx - startx) - starty * (x - endx) / (endx - startx))
    return _.map(_.range(startx, endx + 1), x => [x, lineFn(x)])
  } else {
    pixelsToDraw = lineHeight
    endx = y2 > y1 ? x2 : x1
    endy = y2 > y1 ? y2 : y1
    startx = y2 > y1 ? x1 : x2
    starty = y2 > y1 ? y1 : y2
    const lineFn = (y) => Math.round(endx * (y - starty) / (endy - starty) - startx * (y - endy) / (endy - starty))
    return _.map(_.range(starty, endy + 1), y => [lineFn(y), y])
  }
}

export default function PixelLine({x1, y1, x2, y2, color, colorIndex}) {
  const pixels = getLinePixels(x1, y1, x2, y2)
  return (
    <g data-type='pixel-line'>
    {_.map(pixels, (px) => <Pixel key={`${px[0]} ${px[1]}`} x={px[0]} y={px[1]} color={color} colorIndex={colorIndex} />)}
    </g>
  )
}
