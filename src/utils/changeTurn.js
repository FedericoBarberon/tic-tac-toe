import { players } from '../constants/players'

export const changeTurn = (prevTurn) => {
  if (prevTurn === players.p1) return players.p2
  return players.p1
}
