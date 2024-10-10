var findOrder = function (numCourses, prerequisites) {
  let visiting = new Set(); //keep track of current path and detect cycles
  let visited = new Set(); // indicates we've visited the course and all its children and that we can complete that course without entering a cycle
  let courseOrder = [];

  //build adjacency list
  let adjList = buildAdjList(numCourses, prerequisites);

  let traverseNodes = function (node) {
    if (visiting.has(node)) return false;
    if (visited.has(node)) return true;

    visiting.add(node);

    for (let neighbor of adjList.get(node)) {
      if (!traverseNodes(neighbor)) return [];
    }

    visiting.delete(node);
    visited.add(node);
    courseOrder.push(node);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!traverseNodes(i)) return [];
  }

  return courseOrder;
};

var buildAdjList = function (numCourses, prerequisites) {
  let adjList = new Map();

  for (let i = 0; i < numCourses; i++) {
    adjList.set(i, []);
  }

  for (let [course, prereq] of prerequisites) {
    // if (!adjList.get(course)) {
    //   adjList.set(course, [])
    // }
    adjList.get(course).push(prereq);
  }

  return adjList;
};
