import CloseIcon from '../../assets/icons/CloseIcon.svg'

export default function Close ({ handleClose }) {
  return (
    <button className='close' title='Close' onClick={handleClose}>
      <img src={CloseIcon} alt='Close' />
    </button>
  )
};
