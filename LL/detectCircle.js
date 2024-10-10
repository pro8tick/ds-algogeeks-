function detectLoop(head) {
  // Fast and slow pointers initially points to the
  // head
  let slow = head,
    fast = head;

  // Loop that runs while fast and slow pointer are
  // not null and not equal
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If fast and slow pointer points to the same
    // node, then the cycle is detected
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
