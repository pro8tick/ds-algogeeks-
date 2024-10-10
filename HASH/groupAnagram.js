/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = (key) => {
    return key.split("").sort().join("");
  };
  const map = new Map();
  strs.forEach((str) => {
    const key = hash(str);
    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
  });
  return Array.from(map.values());
};
