function moveToFront(head) {
  if (head == null || head.next == null) {
    return head;
  }

  let secLast = null;
  let last = head;

  while (last.next) {
    secLast = last;
    last = last.next;
  }

  secLast.next = null;

  last.next = head;
  head = last;
  return head;
}
