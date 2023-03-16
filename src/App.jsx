import HomePage from './routes/Home/HomePage'
import PlayPage from './routes/Play/PlayPage'
import MultiplayerPage from './routes/Multiplayer/MultiplayerPage'
import MultiplayerPlayPage from './routes/MultiplayerPlay/MultiplayerPlayPage'
import GameProvider from './context/GameContext'
import MultiplayerProvider from './context/MultiplayerContext'
import { Route } from 'wouter'
import './app.scss'

export default function App () {
  return (
    <div className='App'>
      <Route path='/' component={HomePage} />

      <GameProvider>
        <Route path='/play' component={PlayPage} />
      </GameProvider>

      <MultiplayerProvider>
        <Route path='/multiplayer' component={MultiplayerPage} />
        <Route path='/multiplayer/play' component={MultiplayerPlayPage} />
      </MultiplayerProvider>
    </div>
  )
}
