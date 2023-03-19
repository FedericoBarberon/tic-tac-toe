import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MultiplayerContext = createContext()

export default function MultiplayerProvider ({ children }) {
  const [rooms, setRooms] = useState([])
  const [joinedRoom, setJoinedRoom] = useState()

  const navigate = useNavigate()

  const createRoom = (room) => {
    room.id = window.crypto.randomUUID()
    setRooms(prevRooms => [...prevRooms, room])
  }

  const joinRoom = (room, password) => {
    if (room.private && room.password !== password) {
      throw new Error('Contraseña incorrecta')
    }

    setJoinedRoom(room)
    navigate('multiplayer/play')
  }

  return (
    <MultiplayerContext.Provider value={{ rooms, createRoom, joinedRoom, joinRoom }}>
      {children}
    </MultiplayerContext.Provider>
  )
}
