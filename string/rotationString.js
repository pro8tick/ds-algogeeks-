//Function to check if two strings are rotations of each other or not.
function areRotations(s1, s2) {
  // code here
  if (s1.length !== s2.length) {
    return false;
  } else {
    let N = s1.length;
    let firstNum = [];
    for (let i = 0; i < N; i++) {
      if (s1[0] === s2[i]) {
        firstNum.push(i);
      }
    }
    let isRotatn = false;
    for (let j = 0; j < firstNum.length; j++) {
      isRotatn = checkRotation(firstNum[j], N);
      if (isRotatn) {
        return true;
      }
    }
    return false;
  }

  function checkRotation(Idx, size) {
    for (let i = 0; i < size; i++) {
      if (s1[i] != s2[(i + Idx) % size]) return false;
    }
    return true;
  }
}

let str1 = "geeksforgeeks";
let str2 = "forgeeksgeeks";

console.log(areRotations(str1, str2));
