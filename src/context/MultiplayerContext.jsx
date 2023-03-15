import { createContext, useEffect, useState } from 'react'

export const MultiplayerContext = createContext()

const mockupRooms = [
  {
    name: 'Biggie room',
    id: 1,
    private: true
  },
  {
    name: 'My Room',
    id: 2,
    private: false
  },
  {
    name: 'I always win',
    id: 3,
    private: true
  }
]

export default function MultiplayerProvider ({ children }) {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    setRooms(mockupRooms)
  }, [])

  return (
    <MultiplayerContext.Provider value={{ rooms }}>
      {children}
    </MultiplayerContext.Provider>
  )
}
