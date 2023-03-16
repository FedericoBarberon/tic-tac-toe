import { createContext, useState } from 'react'

export const MultiplayerContext = createContext()

export default function MultiplayerProvider ({ children }) {
  const [rooms, setRooms] = useState([])

  const createRoom = (room) => {
    room.id = window.crypto.randomUUID()
    setRooms(prevRooms => [...prevRooms, room])
  }

  return (
    <MultiplayerContext.Provider value={{ rooms, createRoom }}>
      {children}
    </MultiplayerContext.Provider>
  )
}
