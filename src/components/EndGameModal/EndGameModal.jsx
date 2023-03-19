import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gameStatus } from '../../constants/gameStatus'
import { useConfig } from '../../hooks/useConfig'
import { useGame } from '../../hooks/useGame'
import Close from '../Close/Close'
import ModalCard from '../ModalCard/ModalCard'

export default function EndGameModal () {
  const { state, resetGame } = useGame()
  const { avatars } = useConfig()
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)

  useEffect(() => {
    if (state.status !== gameStatus.playing) setShowModal(true)
    else setShowModal(false)
  }, [state.status])

  return showModal && (
    <ModalCard>
      <header>
        <h2>
          {
            state.status === gameStatus.win
              ? `${avatars[state.turn]} Wins!`
              : '⚔ Draw'
          }
        </h2>
        <Close handleClose={handleClose} />
      </header>
      <div className='f-row'>
        <button className='button' onClick={resetGame}>Play Again</button>
        <Link to='/' className='button'>Exit</Link>
      </div>
    </ModalCard>
  )
}
