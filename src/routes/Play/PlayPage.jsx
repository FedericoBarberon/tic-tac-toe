import Board from '../../components/Board/Board'
import { Link } from 'wouter'
import { useConfig } from '../../hooks/useConfig'
import { useGame } from '../../hooks/useGame'
import './playPage.scss'

export default function PlayPage () {
  const { state } = useGame()
  const { avatars } = useConfig()

  return (
    <div className='container'>
      <Link href='/'>
        <a className='button'>Exit</a>
      </Link>
      <Board />
      <h2 className='turn'><span>{avatars[state.turn]}</span> Turn</h2>
    </div>
  )
}
