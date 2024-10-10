/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let graph = {};
  for (let i = 0; i < values.length; i++) {
    let [numerator, denominator] = equations[i];
    if (!graph[numerator]) graph[numerator] = {};
    if (!graph[denominator]) graph[denominator] = {};

    graph[numerator][denominator] = values[i];
    graph[denominator][numerator] = 1 / values[i];
  }

  let results = [];
  for (let query of queries) {
    let [numerator, denominator] = query;
    let visited = new Set();
    let result = evaluateQuery(numerator, denominator, visited);
    results.push(result);
  }
  return results;

  function evaluateQuery(numerator, denominator, visited) {
    if (!(numerator in graph) || !(denominator in graph)) {
      return -1.0;
    }
    if (numerator == denominator) return 1.0;

    visited.add(numerator);
    let neighbours = graph[numerator];
    for (let neighbour in neighbours) {
      if (!visited.has(neighbour)) {
        let result = evaluateQuery(neighbour, denominator, visited);
        if (result !== -1) {
          return neighbours[neighbour] * result;
        }
      }
    }
    return -1.0;
  }
};
