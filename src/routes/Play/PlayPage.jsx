import Board from '../../components/Board/Board'
import { useConfig } from '../../hooks/useConfig'
import { useGame } from '../../hooks/useGame'
import EndGameModal from '../../components/EndGameModal/EndGameModal'
import './playPage.scss'
import { Link } from 'react-router-dom'

export default function PlayPage () {
  const { state, resetGame } = useGame()
  const { avatars } = useConfig()

  return (
    <div className='container'>
      <Board />
      <div className='f-row'>
        <Link to='/' className='button'>Exit</Link>
        <h2 className='turn'>
          <span>{avatars[state.turn]}</span>
          Turn
        </h2>
        <button onClick={resetGame} className='button'>Reset</button>
      </div>
      <EndGameModal />
    </div>
  )
}
