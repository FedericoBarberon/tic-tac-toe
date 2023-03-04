import ModalCard from '../ModalCard/ModalCard'
import ConfigIcon from '../../assets/icons/ConfigIcon.svg'
import CloseIcon from '../../assets/icons/CloseIcon.svg'
import { useConfig } from '../../hooks/useConfig'
import './configModal.scss'

export default function ConfigModal ({ handleClose }) {
  const { avatars, changeAvatars } = useConfig()

  const handleAvatarChange = (event) => {
    event.preventDefault()

    const p1 = event.target.p1.value
    const p2 = event.target.p2.value

    changeAvatars({ p1, p2 })
    handleClose()
  }

  return (
    <ModalCard>
      <header>
        <img src={ConfigIcon} alt='Config Icon' />
        <h2>Configuration</h2>
        <button className='close' title='Close' onClick={handleClose}>
          <img src={CloseIcon} alt='Close' />
        </button>
      </header>

      <form className='players-form' onSubmit={handleAvatarChange}>
        <h3>Avatars</h3>
        <label>
          Player 1
          <input defaultValue={avatars.p1} name='p1' minLength={1} maxLength={2} placeholder='X' />
        </label>
        <label>
          Player 2
          <input defaultValue={avatars.p2} name='p2' minLength={1} maxLength={2} placeholder='O' />
        </label>

        <button className='button'>Save</button>
      </form>
    </ModalCard>
  )
}
