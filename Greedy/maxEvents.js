/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  let minHeap = new PriorityQueues((a, b) => a - b);
  let i = 0,
    result = 0,
    day = 0;

  while (!minHeap.isEmpty() || i < events.length) {
    if (minHeap.isEmpty()) day = events[i][0];

    while (i < events.length && events[i][0] <= day) {
      minHeap.add(events[i++][1]);
    }

    minHeap.poll();
    ++result;
    ++day;

    while (!minHeap.isEmpty() && minHeap.peek() < day) {
      minHeap.poll();
    }
  }
  return result;
};

class PriorityQueues {
  constructor(compareFunction) {
    this.store = [];
    this.compareFunction = compareFunction;
  }

  peek() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  poll() {
    if (this.size() < 2) return this.store.pop();
    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  add(val) {
    this.store.push(val);
    this.heapifyUp(this.size() - 1);
  }

  heapifyUp(child) {
    while (child) {
      const parent = Math.floor((child - 1) / 2);

      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child],
        ];
        child = parent;
      } else {
        return parent;
      }
    }
  }

  heapifyDown(parent) {
    while (true) {
      let [child, child2] = [1, 2]
        .map((x) => parent * 2 + x)
        .filter((x) => x < this.size());
      if (this.shouldSwap(child2, child)) {
        child = child2;
      }
      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child],
        ];
        parent = child;
      } else {
        return parent;
      }
    }
  }

  shouldSwap(child, parent) {
    return (
      child && this.compareFunction(this.store[child], this.store[parent]) < 0
    );
  }
}
