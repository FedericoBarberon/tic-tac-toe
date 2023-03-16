import { useMultiplayer } from '../../hooks/useMultiplayer'

export default function MultiplayerPlayPage () {
  const { joinedRoom } = useMultiplayer()

  return (
    <div>
      <p>Joined to room '{joinedRoom.name}'</p>
    </div>
  )
}
