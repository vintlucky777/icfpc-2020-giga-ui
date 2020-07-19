import React from 'react'
import Icon from 'src/components/Icon'

const pattern = [
  '  X  ',
  ' XXX ',
  'XX XX',
  ' XXX ',
  '  X  ',
]

export default function Defender({position}) {
  return <Icon x={position[0]} y={position[1]} pattern={pattern} />
}
