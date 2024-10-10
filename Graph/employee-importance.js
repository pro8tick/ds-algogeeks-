/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
/*
6:57 => 7:09
total importance of this employee and everyone below him

1: [2, 3]
2: []
3: []

1: [5]
5: []

important(id, importance)
 */
var GetImportance = function (employees, id) {
  let employeeMap = new Map();
  //let connections = {};

  for (let i = 0; i < employees.length; i++) {
    let { id, importance, subordinates } = employees[i];
    //importanceVal.set(id, importance);
    employeeMap.set(id, employees[i]);

    //connections[id] = connections[id] || [];
    //connections[id].push(...subordinates);
  }

  let ans = 0;

  function dfs(currID) {
    let { id, importance, subordinates } = employeeMap.get(currID);

    ans += importance;

    for (let sub of subordinates) {
      dfs(sub);
    }
  }

  dfs(id);

  return ans;
};
