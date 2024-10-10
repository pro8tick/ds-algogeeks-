class node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function maxwidth(root) {
  if (root == null) return 0;

  let maxwidth = 0;

  // Do Level order traversal keeping
  // track of number of nodes at every level
  let q = [];
  q.push(root);

  while (q.length > 0) {
    let count = q.length;

    // Update the maximum node count value
    maxwidth = Math.max(maxwidth, count);

    // Iterate for all the nodes in
    // the queue currently
    while (count-- > 0) {
      // Dequeue an node from queue
      let temp = q.shift();

      // Enqueue left and right children
      // of dequeued node
      if (temp.left != null) {
        q.push(temp.left);
      }
      if (temp.right != null) {
        q.push(temp.right);
      }
    }
  }
  return maxwidth;
}

let root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.right = new node(8);
root.right.right.left = new node(6);
root.right.right.right = new node(7);

/*   Constructed Binary tree is:
      1
    /   \
  2      3
/  \      \
4    5      8
         /   \
        6     7    */

// Function call
console.log("Maximum width is " + maxwidth(root));
