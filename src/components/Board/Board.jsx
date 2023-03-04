import { useGame } from '../../hooks/useGame'
import { useConfig } from '../../hooks/useConfig'
import './board.scss'

export default function Board () {
  const { state, markCell } = useGame()
  const { avatars } = useConfig()

  const handleMarkCell = (cellIndex) => {
    if (state.board[cellIndex]) return

    markCell(cellIndex)
  }

  return (
    <div className='board'>
      {
        state.board.map((cell, cellIndex) => (
          <button className='cell' key={cellIndex} onClick={() => handleMarkCell(cellIndex)}>
            {cell && avatars[state.board[cellIndex]]}
          </button>
        ))
      }
    </div>
  )
}
