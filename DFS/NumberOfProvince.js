var findCircleNum = function (isConnected) {
  let visited = {};
  let province = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(i);
      province++;
    }
  }

  function dfs(vertex) {
    for (let edge = 0; edge < isConnected[vertex].length; edge++) {
      if (isConnected[vertex][edge] && !visited[edge]) {
        visited[edge] = true;
        dfs(edge);
      }
    }
  }

  return province;
};
