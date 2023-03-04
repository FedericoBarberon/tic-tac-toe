import { useContext } from 'react'
import { ConfigContext } from '../context/ConfigContext'

export const useConfig = () => useContext(ConfigContext)
