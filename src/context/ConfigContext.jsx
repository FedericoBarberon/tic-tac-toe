import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ConfigContext = createContext()

export default function ConfigProvider ({ children }) {
  const [avatars, setAvatars] = useLocalStorage('avatars', { p1: '❌', p2: '🔵' })

  const changeAvatars = (newAvatars) => setAvatars(newAvatars)

  return (
    <ConfigContext.Provider value={{ avatars, changeAvatars }}>
      {children}
    </ConfigContext.Provider>
  )
}
