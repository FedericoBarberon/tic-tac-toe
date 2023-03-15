import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ConfigContext = createContext()

export default function ConfigProvider ({ children }) {
  const [multiplayerName, setMultiplayerName] = useLocalStorage('multiplayerName', 'player unknown')
  const [avatars, setAvatars] = useLocalStorage('avatars', { p1: '❌', p2: '🔵' })

  const changeMultiplayerName = (newName) => setMultiplayerName(newName)
  const changeAvatars = (newAvatars) => setAvatars(newAvatars)

  return (
    <ConfigContext.Provider value={{ avatars, changeAvatars, multiplayerName, changeMultiplayerName }}>
      {children}
    </ConfigContext.Provider>
  )
}
