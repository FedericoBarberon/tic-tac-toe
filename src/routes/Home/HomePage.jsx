import ConfigModal from '../../components/ConfigModal/ConfigModal'
import { useState } from 'react'
import './homePage.scss'
import { Link } from 'react-router-dom'

export default function HomePage () {
  const [showConfig, setShowConfig] = useState(false)

  const handleOpen = () => setShowConfig(true)
  const handleClose = () => setShowConfig(false)

  return (
    <div className='container'>
      <h1>Tic-Tac-Toe</h1>
      <div className='f-column'>
        <Link to='/play' className='button'>Play</Link>
        <Link to='/multiplayer' className='button'>Multiplayer</Link>
        <button className='button' onClick={handleOpen}>Config</button>
      </div>
      {showConfig && <ConfigModal handleClose={handleClose} />}
    </div>
  )
}
