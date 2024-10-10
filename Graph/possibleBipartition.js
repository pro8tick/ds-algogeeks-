var possibleBipartition = function (n, dislikes) {
  let queue = [];
  const graph = buildGraph(n, dislikes);
  const color = new Map();
  for (let i = 0; i < graph.length; i++) {
    if (color.has(i)) continue;
    queue.push(i);
    color.set(i, true);

    while (queue.length) {
      let curr = queue.shift();
      for (let neighbour of graph[curr]) {
        if (!color.has(neighbour)) {
          color.set(neighbour, !color.get(curr));
          queue.push(neighbour);
        } else if (color.get(neighbour) === color.get(curr)) return false;
      }
    }
  }
  return true;
};

const buildGraph = (n, edges) => {
  const graph = new Array(n).map((_) => []);

  for (let [src, des] of edges) {
    graph[src - 1].push(des - 1);
    graph[des - 1].push(src - 1);
  }
  return graph;
};
