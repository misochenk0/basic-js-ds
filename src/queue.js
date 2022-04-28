const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {

  constructor() {
      this.list = null;
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value, l = this.list) {
    if(l && l.next) {
      this.enqueue(value, l.next)
    } else {
      if(!this.list) {
        this.list = new ListNode(value)
      } else {
        l.next = new ListNode(value)
      }
    }
  }

  dequeue() {
    let val = this.list.value;
    function checkList(l) {
      if(l.next) {
        l.value = l.next.value
        if(l.next && !l.next.next) {
          return l.next = null
        } else {
          checkList(l.next)
        }
      }
    }
    checkList(this.list)
    return val
     
  }
}

// console.log(queue.getUnderlyingList());

module.exports = {
  Queue
};
