export const filterRooms = (rooms, filters) => {
  let filteredRooms = rooms

  if (filters.onlyPublics) {
    filteredRooms = filteredRooms.filter(room => !room.private)
  }

  if (filters.search) {
    filteredRooms = filteredRooms.filter(room => (
      room.name.toLowerCase().includes(filters.search.toLowerCase())
    ))
  }

  return filteredRooms
}
