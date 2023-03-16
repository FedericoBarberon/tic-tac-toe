import { useMultiplayer } from '../../hooks/useMultiplayer'
import { useMemo, useState } from 'react'
import { filterRooms } from '../../utils/filterRooms'
import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal'
import PrivateRoomIcon from '../../assets/icons/PrivateRoomIcon.svg'
import GroupIcon from '../../assets/icons/GroupIcon.svg'
import BackIcon from '../../assets/icons/BackIcon.svg'
import './multiplayerPage.scss'
import { Link } from 'wouter'

export default function MultiplayerPage () {
  const { rooms } = useMultiplayer()
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false)
  const [filters, setFilters] = useState({ search: '', onlyPublics: false })
  const filteredRooms = useMemo(() => filterRooms(rooms, filters), [rooms, filters])

  const openCreateRoomModal = () => setShowCreateRoomModal(true)
  const closeCreateRoomModal = () => setShowCreateRoomModal(false)

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
          <Link href='/'>
            <a>
              <img src={BackIcon} alt='Back Icon' title='Back' className='icon' />
            </a>
          </Link>
        </header>

        <div>
          <input placeholder='Search a room' className='input' name='search' value={filters.search} onChange={handleSearchChange} />
          <button className='button' onClick={openCreateRoomModal}>Create</button>
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

      {showCreateRoomModal && <CreateRoomModal handleClose={closeCreateRoomModal} />}
    </div>
  )
}
