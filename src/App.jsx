import HomePage from './routes/Home/HomePage'
import PlayPage from './routes/Play/PlayPage'
import MultiplayerPage from './routes/Multiplayer/MultiplayerPage'
import MultiplayerPlayPage from './routes/MultiplayerPlay/MultiplayerPlayPage'
import GameProvider from './context/GameContext'
import MultiplayerProvider from './context/MultiplayerContext'
import { Outlet, Route, Routes } from 'react-router-dom'
import './app.scss'

export default function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route
          path='/play' element={
            <GameProvider>
              <PlayPage />
            </GameProvider>
        }
        />

        <Route
          element={
            <MultiplayerProvider>
              <Outlet />
            </MultiplayerProvider>
        }
        >
          <Route path='multiplayer' element={<MultiplayerPage />} />
          <Route path='multiplayer/play' element={<MultiplayerPlayPage />} />
        </Route>
      </Routes>
    </div>
  )
}
