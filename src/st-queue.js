const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {
 queue = {}

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
   if (this.length == 0) {
     this.head = new Node(value);
   } else {
     let current = this.head;
     while (current.next) {
        current = current.next;
     }

     current.next = new Node(value);
   }

   this.length++;
  }

  dequeue() {
    
  }

}
