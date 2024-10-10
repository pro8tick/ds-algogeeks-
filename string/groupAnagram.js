var groupAnagrams = function (strs) {
  const hash = (key) => {
    return key.split("").sort().join("");
  };
  const map = {};
  strs.forEach((str) => {
    const key = hash(str);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  });
  return Array.from(Object.values(map));
};
