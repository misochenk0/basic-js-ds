const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(3)
list.next.next.next.next = new ListNode(4)
list.next.next.next.next.next = new ListNode(5)



function removeKFromList(l, k) {
  if(l == null){
    return l;
  }
  while(l.value == k){
      l = l.next;
  }
  function checkNode() {
    let thisNode = l;
    let nextNode = thisNode.next;
    while(nextNode != null){
        if(nextNode.value == k){
            thisNode.next = nextNode.next;
            if(thisNode.next == null)
                break;
        }
        thisNode = thisNode.next;
        nextNode = thisNode.next;       
    }
  }
  checkNode()
  let node = l
  while(node && node.value) {
    if(node.value === k) {
      checkNode()
    }
    node = node.next
  }
  return l;
}


module.exports = {
  removeKFromList
};
