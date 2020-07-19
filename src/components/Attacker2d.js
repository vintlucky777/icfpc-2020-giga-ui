import React from 'react'
import Icon from 'src/components/Icon'

const pattern = [
  'XX XX',
  'XXXXX',
  ' XXX ',
  'XXXXX',
  'XX XX',
]

export default function Attacker({position}) {
  return <Icon x={position[0]} y={position[1]} pattern={pattern} />
}
