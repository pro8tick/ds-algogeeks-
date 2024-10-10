function isSubsetUsingHashing(arr1, arr2) {
  // Create a hash set and insert all elements of arr1
  const hashSet = new Set(arr1);

  // Check each element of arr2 in the hash set
  for (const num of arr2) {
    if (!hashSet.has(num)) {
      return false;
    }
  }

  // If all elements of arr2 are found in the hash set
  return true;
}

// Driver code
const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];

if (isSubsetUsingHashing(arr1, arr2)) {
  console.log("Yes");
} else {
  console.log("No");
}
