import { useContext } from 'react'
import { MultiplayerContext } from '../context/MultiplayerContext'

export const useMultiplayer = () => useContext(MultiplayerContext)
