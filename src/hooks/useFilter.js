export const useFilter = (rooms, filters) => {
  let filteredRooms = rooms

  if (filters.onlyPublic) {
    filteredRooms = filteredRooms.filter(room => !room.private)
  }

  if (filters.search) {
    filteredRooms = filteredRooms.filter(room => (
      room.name.toLowerCase().includes(filters.search.toLowerCase())
    ))
  }

  return filteredRooms
}
