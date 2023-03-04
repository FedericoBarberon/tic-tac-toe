import { createContext } from 'react'
import { useGameReducer } from '../hooks/useGameReducer'

export const GameContext = createContext()

export default function GameProvider ({ children }) {
  const { state, markCell } = useGameReducer()

  return (
    <GameContext.Provider value={{ state, markCell }}>
      {children}
    </GameContext.Provider>
  )
}
