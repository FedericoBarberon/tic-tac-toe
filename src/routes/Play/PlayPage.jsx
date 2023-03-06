import Board from '../../components/Board/Board'
import { Link } from 'wouter'
import { useConfig } from '../../hooks/useConfig'
import { useGame } from '../../hooks/useGame'
import EndGameModal from '../../components/EndGameModal/EndGameModal'
import './playPage.scss'

export default function PlayPage () {
  const { state, resetGame } = useGame()
  const { avatars } = useConfig()

  return (
    <div className='container'>
      <Board />
      <div className='f-row'>
        <Link href='/'>
          <a className='button'>Exit</a>
        </Link>
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
