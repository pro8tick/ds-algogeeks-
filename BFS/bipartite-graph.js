var isBipartite = function (graph) {
  let color = new Map();
  let stack = [];
  for (let i = 0; i < graph.length; i++) {
    if (color.has(i)) continue;
    stack.push(i);
    color.set(i, true);

    while (stack.length > 0) {
      let current = stack.pop();
      for (let neighbour of graph[current]) {
        if (!color.has(neighbour)) {
          color.set(neighbour, !color.get(current));
          stack.push(neighbour);
        } else if (color.get(neighbour) === color.get(current)) return false;
      }
    }
  }
  return true;
};

// A graph is bipartite if the nodes can be partitioned into two independent sets A and
//B such that every edge in the graph connects a node in set A and a node in set B.
