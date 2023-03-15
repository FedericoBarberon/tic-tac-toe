import ModalCard from '../ModalCard/ModalCard'
import ConfigIcon from '../../assets/icons/ConfigIcon.svg'
import { useConfig } from '../../hooks/useConfig'
import './configModal.scss'
import Close from '../Close/Close'

export default function ConfigModal ({ handleClose }) {
  const { avatars, changeAvatars, multiplayerName, changeMultiplayerName } = useConfig()

  const handleAvatarChange = (event) => {
    event.preventDefault()

    const p1 = event.target.p1.value
    const p2 = event.target.p2.value

    const playerName = event.target.playerName.value

    if (p1 !== avatars.p1 || p2 !== avatars.p2) changeAvatars({ p1, p2 })
    if (playerName !== multiplayerName) changeMultiplayerName(playerName)
    handleClose()
  }

  return (
    <ModalCard>
      <header>
        <img src={ConfigIcon} alt='Config Icon' className='icon' />
        <h2>Configuration</h2>
        <Close handleClose={handleClose} />
      </header>

      <form className='config-form' onSubmit={handleAvatarChange}>
        <div className='form-group'>
          <h3>Avatars</h3>
          <label className='avatar-input-label'>
            Player 1
            <input defaultValue={avatars.p1} name='p1' minLength={1} maxLength={2} placeholder='X' required />
          </label>
          <label className='avatar-input-label'>
            Player 2
            <input defaultValue={avatars.p2} name='p2' minLength={1} maxLength={2} placeholder='O' required />
          </label>
        </div>

        <div className='form-group'>
          <h3>Multiplayer</h3>
          <label className='multiplayerName-input-label'>
            Player Name
            <input defaultValue={multiplayerName} name='playerName' minLength={3} maxLength={20} placeholder='Enter your player name' required />
          </label>
        </div>

        <button className='button'>Save</button>
      </form>
    </ModalCard>
  )
}
