import { useMultiplayer } from '../../hooks/useMultiplayer'
import { useMemo, useState } from 'react'
import { filterRooms } from '../../utils/filterRooms'
import PrivateRoomIcon from '../../assets/icons/PrivateRoomIcon.svg'
import GroupIcon from '../../assets/icons/GroupIcon.svg'
import './multiplayerPage.scss'

export default function MultiplayerPage () {
  const { rooms } = useMultiplayer()
  const [filters, setFilters] = useState({ search: '', onlyPublics: false })
  const filteredRooms = useMemo(() => filterRooms(rooms, filters), [rooms, filters])

  const handleSearchChange = (e) => {
    setFilters(prevFilters => ({ ...prevFilters, search: e.target.value }))
  }

  const handleOnlyPublicsChange = (e) => {
    setFilters(prevFilters => ({ ...prevFilters, onlyPublics: !prevFilters.onlyPublics }))
  }

  return (
    <div className='container multiplayerPage'>
      <h1>Multiplayer</h1>

      <section className='rooms-section'>
        <header>
          <img src={GroupIcon} alt='Group Icon' className='icon' />
          <h2>Rooms</h2>
        </header>

        <div>
          <input placeholder='Search a room' className='input' name='search' value={filters.search} onChange={handleSearchChange} />
          <button className='button'>Create</button>
        </div>

        <label>
          <input type='checkbox' checked={filters.onlyPublics} onChange={handleOnlyPublicsChange} name='onlyPublics' />
          Show only publics rooms
        </label>

        {
          filteredRooms.length > 0
            ? (
              <ul className='rooms'>
                {filteredRooms.map(room => (
                  <li key={room.id} className='room'>
                    <span>{room.name}</span>
                    {room.private && <img src={PrivateRoomIcon} alt='Private' title='Private Room' className='icon' />}
                    <button className='button'>Join</button>
                  </li>
                ))}
              </ul>
              )
            : <p>There is no rooms</p>
        }
      </section>
    </div>
  )
}
