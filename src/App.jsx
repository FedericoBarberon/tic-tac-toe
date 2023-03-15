import HomePage from './routes/Home/HomePage'
import PlayPage from './routes/Play/PlayPage'
import MultiplayerPage from './routes/Multiplayer/MultiplayerPage'
import GameProvider from './context/GameContext'
import MultiplayerProvider from './context/MultiplayerContext'
import { Route } from 'wouter'
import './app.scss'

export default function App () {
  return (
    <div className='App'>
      <Route path='/'>
        <HomePage />
      </Route>

      <Route path='/play'>
        <GameProvider>
          <PlayPage />
        </GameProvider>
      </Route>

      <Route path='/multiplayer'>
        <MultiplayerProvider>
          <MultiplayerPage />
        </MultiplayerProvider>
      </Route>
    </div>
  )
}
