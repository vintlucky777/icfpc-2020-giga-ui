export const gameState = {
  attacker: {
    position: [-36, -10],
    velocity: [0, 0],
    thrust: [0, 0],
    stats: [100, 0, 0, 1],
  },
  defender: {
    position: [36, 10],
    velocity: [0, 0],
    thrust: [0, 0],
    stats: [100, 0, 0, 1],
  },
  planetSize: 8,
  rays: [],
}

export function getGameState() {
  return gameState
}
