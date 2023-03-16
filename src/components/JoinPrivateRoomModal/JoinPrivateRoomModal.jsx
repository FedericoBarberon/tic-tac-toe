import ModalCard from '../ModalCard/ModalCard'
import PrivateRoomIcon from '../../assets/icons/PrivateRoomIcon.svg'
import Close from '../Close/Close'
import { useState } from 'react'
import { useMultiplayer } from '../../hooks/useMultiplayer'

export default function JoinPrivateRoomModal ({ room, handleClose }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const { joinRoom } = useMultiplayer()

  const handleChange = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError()

    if (!password) return

    try {
      joinRoom(room, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <ModalCard>
      <header>
        <img src={PrivateRoomIcon} alt='Private Room icon' className='icon' />
        <h2>Join Room</h2>
        <Close handleClose={handleClose} />
      </header>

      <form className='config-form' onSubmit={handleSubmit}>
        <label className='input-label'>
          Password
          <input placeholder='Enter the password' value={password} onChange={handleChange} />
        </label>
        {error && <p className='error'>{error}</p>}
        <button className='button'>Join</button>
      </form>
    </ModalCard>
  )
}
