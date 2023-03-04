import HomePage from './routes/Home/HomePage'
import PlayPage from './routes/Play/PlayPage'
import { Route } from 'wouter'
import './app.scss'

export default function App () {
  return (
    <div className='App'>
      <Route path='/' component={HomePage} />
      <Route path='/play' component={PlayPage} />
    </div>
  )
}
