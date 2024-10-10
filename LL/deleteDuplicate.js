var deleteDuplicates = function (head) {
  let curr = head;
  while (curr != null && curr.next != null) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

/**
 Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
 leaving only distinct numbers from the original list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates2 = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let curr = dummy;

  while (curr.next && curr.next.next) {
    if (curr.next.val == curr.next.next.val) {
      while (
        curr.next &&
        curr.next.next &&
        curr.next.val === curr.next.next.val
      ) {
        curr.next = curr.next.next;
      }
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};
