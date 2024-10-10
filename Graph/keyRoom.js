var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  function dfs(room) {
    if (!visited.has(room)) {
      visited.add(room);
      for (let i of rooms[room]) {
        dfs(i);
      }
    }
  }

  dfs(0);
  return visited.size == rooms.length;
};
