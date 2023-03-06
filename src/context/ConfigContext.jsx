import { createContext, useEffect, useState } from 'react'

export const ConfigContext = createContext()

export default function ConfigProvider ({ children }) {
  const [avatars, setAvatars] = useState({ p1: '❌', p2: '🔵' })

  const changeAvatars = (newAvatars) => {
    setAvatars(newAvatars)

    const avatarsString = JSON.stringify(newAvatars)
    window.localStorage.setItem('avatars', avatarsString)
  }

  useEffect(() => {
    const avatarsFromLS = JSON.parse(window.localStorage.getItem('avatars'))

    if (!avatarsFromLS) {
      const avatarsString = JSON.stringify(avatars)
      window.localStorage.setItem('avatars', avatarsString)
    } else {
      setAvatars(avatarsFromLS)
    }
  }, [])

  return (
    <ConfigContext.Provider value={{ avatars, changeAvatars }}>
      {children}
    </ConfigContext.Provider>
  )
}
