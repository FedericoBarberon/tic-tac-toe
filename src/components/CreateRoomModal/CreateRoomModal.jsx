import ModalCard from '../ModalCard/ModalCard'
import Close from '../Close/Close'
import RoomIcon from '../../assets/icons/RoomIcon.svg'
import { useConfig } from '../../hooks/useConfig'
import { useMultiplayer } from '../../hooks/useMultiplayer'
import { useState } from 'react'

export default function CreateRoomModal ({ handleClose }) {
  const { avatars } = useConfig()
  const { createRoom } = useMultiplayer()

  const [formValues, setFormValues] = useState({
    name: '',
    private: false,
    password: '',
    avatars: {
      p1: avatars.p1,
      p2: avatars.p2
    }
  })

  const handleInputChange = (e) => {
    setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
  }

  const handlePrivateChange = (e) => {
    setFormValues(prevValues => ({ ...prevValues, private: !prevValues.private, password: '' }))
  }
  const handleAvatarsChange = (e) => {
    setFormValues(prevValues => {
      const avatars = { ...prevValues.avatars, [e.target.name]: e.target.value }

      return { ...prevValues, avatars }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createRoom(formValues)
    handleClose()
  }

  return (
    <ModalCard>
      <header>
        <img src={RoomIcon} alt='Room Icon' className='icon' />
        <h2>Create Room</h2>
        <Close handleClose={handleClose} />
      </header>

      <form className='config-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h3>Room Config</h3>
          <label className='input-label'>
            Name
            <input name='name' placeholder='Enter the room´s name' value={formValues.name} onChange={handleInputChange} maxLength={20} required />
          </label>

          <label className='input-label'>
            <input type='checkbox' checked={formValues.private} onChange={handlePrivateChange} />
            Private
          </label>

          {formValues.private && (
            <label className='input-label'>
              Password
              <input name='password' placeholder='Enter a password' value={formValues.password} onChange={handleInputChange} />
            </label>
          )}
        </div>

        <div className='form-group'>
          <h3>Avatars</h3>
          <label className='avatar-input-label'>
            Player 1
            <input value={formValues.avatars.p1} name='p1' minLength={1} maxLength={2} placeholder='X' required onChange={handleAvatarsChange} />
          </label>
          <label className='avatar-input-label'>
            Player 2
            <input value={formValues.avatars.p2} name='p2' minLength={1} maxLength={2} placeholder='O' required onChange={handleAvatarsChange} />
          </label>
        </div>

        <button className='button'>Create</button>
      </form>
    </ModalCard>
  )
}
