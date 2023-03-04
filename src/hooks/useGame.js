import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export const useGame = () => useContext(GameContext)
