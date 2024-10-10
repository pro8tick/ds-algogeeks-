// Javascript program to search an element in an array
// where difference between adjacent elements is atmost k

// x is the element to be searched in arr[0..n-1]
// such that all elements differ by at-most k.
function search(arr, n, x, k) {
  // Traverse the given array starting from
  // leftmost element
  var i = 0;
  while (i < n) {
    // If x is found at index i
    if (arr[i] == x) return i;

    // Jump the difference between current
    // array element and x divided by k
    // We use max here to make sure that i
    // moves at-least one step ahead.
    i = i + Math.max(1, Math.abs(arr[i] - x) / k);
  }

  document.write("number is not present!");
  return -1;
}

// Driver program to test above function
var arr = [2, 4, 5, 7, 7, 6];
var x = 6;
var k = 2;
var n = arr.length;
document.write("Element " + x + " is present at index " + search(arr, n, x, k));
