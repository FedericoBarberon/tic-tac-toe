import ConfigModal from '../../components/ConfigModal/ConfigModal'
import { useState } from 'react'
import { Link } from 'wouter'
import './homePage.scss'

export default function HomePage() {
  const [showConfig, setShowConfig] = useState(false)

  const handleOpen = () => setShowConfig(true)
  const handleClose = () => setShowConfig(false)

  return (
    <div className='container'>
      <h1>Tic-Tac-Toe</h1>
      <div className="f-column">
        <Link href='/play'>
          <a className='button'>Play</a>
        </Link>
        <button className='button' onClick={handleOpen}>Config</button>
      </div>
      {showConfig && <ConfigModal handleClose={handleClose} />}
    </div>
  )
}