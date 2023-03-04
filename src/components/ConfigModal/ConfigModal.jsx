import ModalCard from '../ModalCard/ModalCard'
import ConfigIcon from '../../assets/icons/ConfigIcon.svg'
import CloseIcon from '../../assets/icons/CloseIcon.svg'

export default function ConfigModal({ handleClose }) {
  return (
    <ModalCard>
      <header>
        <img src={ConfigIcon} alt='Config Icon' />
        <h2>Configuration</h2>
        <button className='close' title='Close' onClick={handleClose}>
          <img src={CloseIcon} alt='Close' />
        </button>
      </header>
    </ModalCard>
  )
}