var allPathsSourceTarget = function (graph) {
  let path = [];
  findPaths([0], 0);
  return path;

  function findPaths(current, node) {
    if (node == graph.length - 1) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < graph[node].length; i++) {
      current.push(next);
      findPaths(current, next);
      current.pop();
    }
  }
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
