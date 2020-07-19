export function addVec(vec1, vec2) {
  return [vec1[0]+vec2[0], vec1[1]+vec2[1]]
}

export function subVec(vec1, vec2) {
  return [vec1[0]-vec2[0], vec1[1]-vec2[1]]
}

export function negVec(vec) {
  return [-vec[0], -vec[1]]
}

export function len(x, y) {
  return (x**2+y**2)**0.5
}

export function toPolarCoords(vec) {
  const [x, y] = vec
  const l = len(x, y)
  let angle = Math.acos(x/l)
  if (y < 0) {
    angle = -angle
  }
  return [l, angle]
}
export function fromPolarCoords(l, a) {
  return [l * Math.cos(a), l * Math.sin(a)]
}

export function rotateVec(x, y, da) {
  const [l, a] = toPolarCoords(x, y)
  return fromPolarCoords(l, a + da)
}
