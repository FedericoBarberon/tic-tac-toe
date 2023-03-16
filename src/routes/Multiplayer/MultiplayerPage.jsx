import { useMultiplayer } from '../../hooks/useMultiplayer'
import { useMemo, useState } from 'react'
import { filterRooms } from '../../utils/filterRooms'
import { Link } from 'wouter'
import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal'
import PrivateRoomIcon from '../../assets/icons/PrivateRoomIcon.svg'
import GroupIcon from '../../assets/icons/GroupIcon.svg'
import BackIcon from '../../assets/icons/BackIcon.svg'
import './multiplayerPage.scss'
import JoinPrivateRoomModal from '../../components/JoinPrivateRoomModal/JoinPrivateRoomModal'

export default function MultiplayerPage () {
  const { rooms, joinRoom } = useMultiplayer()
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false)
  const [joinPrivateRoomModal, setJoinPrivateRoomModal] = useState({ show: false, room: null })
  const [filters, setFilters] = useState({ search: '', onlyPublics: false })
  const filteredRooms = useMemo(() => filterRooms(rooms, filters), [rooms, filters])

  const openCreateRoomModal = () => setShowCreateRoomModal(true)
  const closeCreateRoomModal = () => setShowCreateRoomModal(false)

  const closeJoinPrivateRoomModal = () => setJoinPrivateRoomModal({ show: false, room: null })

  const handleSearchChange = (e) => {
    setFilters(prevFilters => ({ ...prevFilters, search: e.target.value }))
  }

  const handleOnlyPublicsChange = () => {
    setFilters(prevFilters => ({ ...prevFilters, onlyPublics: !prevFilters.onlyPublics }))
  }

  const handleJoin = (room) => {
    if (room.private) {
      setJoinPrivateRoomModal({ show: true, room })
    } else {
      joinRoom(room)
    }
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
                    <button className='button' onClick={() => handleJoin(room)}>Join</button>
                  </li>
                ))}
              </ul>
              )
            : <p>There is no rooms</p>
        }
      </section>

      {showCreateRoomModal && <CreateRoomModal handleClose={closeCreateRoomModal} />}
      {joinPrivateRoomModal.show && <JoinPrivateRoomModal room={joinPrivateRoomModal.room} handleClose={closeJoinPrivateRoomModal} />}
    </div>
  )
}
