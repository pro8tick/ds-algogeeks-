function makeSet(parent, rank, n) {
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = 0;
  }
}

function findParent(parent, vertex) {
  if (parent[vertex] === vertex) {
    return vertex;
  }
  return (parent[vertex] = findParent(parent, parent[vertex]));
}

function unionSet(u, v, parent, rank, n) {
  //this function unions two set on the basis of rank
  //as shown below
  u = findParent(parent, u);
  v = findParent(parent, v);

  if (rank[u] < rank[v]) {
    parent[u] = v;
  } else if (rank[v] < rank[u]) {
    parent[v] = u;
  } else {
    parent[v] = u;
    rank[u]++;
  }
}

function kruskalAlgo(n, edge) {
  //sort the edges in ascending order
  //so that we can access the minimum distance/cost
  edge.sort((a, b) => a[2] - b[2]);

  let parent = new Array(n);
  let rank = new Array(n);

  //function to initialize parent and rank
  makeSet(parent, rank, n);

  let minCost = 0; //to store minimum cost

  for (let i = 0; i < n; i++) {
    let v1 = findParent(parent, edge[i][0]);
    let v2 = findParent(parent, edge[i][1]);
    let wt = edge[i][2];

    //if parents are different that means they are in different sets
    if (v1 != v2) {
      unionSet(v1, v2, parent, rank, n);
      minCost += wt;
      console.log(edge[i][0] + " -- " + edge[i][1] + " == " + wt);
    }
  }
  console.log("Minimum Cost Spanning Tree:", minCost);
}

//Here 5 is the number of edges, can be asked from the user
//when making the graph through user input
//3 represents the no of index positions for storing u --> v(adjacent vertices)
//and its cost/distance;
let edge = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];

kruskalAlgo(5, edge);
