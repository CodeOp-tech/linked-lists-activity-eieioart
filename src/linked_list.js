/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node to the tail of the list
  addToTail(val) {
    let newNode = new node(val);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      size++;
    }

    return size;
  }

  // WARM UP

  // returns the value of the head of the linked list
  headValue() {
    return this.head.value;
  }

  // returns the value of the tail of the linked list
  tailValue() {
    return this.tail.value;
  }

  // returns the value of the node that comes after the head
  nextToHead() {
    return this.head.next;
  }

  // MAIN EXERCISES

  // returns the NODE stored at the Nth index position of the list
  getNthNode(index) {
    //initialize node to be first node
    let node = this.head;
    //initialize ix to be 0
    let ix = 0;
    //while (there is a node and 'ix' is less than 'index')
    while (node !== null && ix < index) {
      //if 'ix' equals 'index'
      // return 'node'
      //advance 'node'
    }
    //return null
  }

  // removes the node assigned to the tail
  removeFromTail() {}

  // adds a node to the head of the list
  addToHead(val) {}

  // removes the node assigned to the head
  removeFromHead() {}

  // returns the node that contains the value
  findNode(refNodeValue) {}

  // applies a callback to every node in the list
  forEach(fn) {}

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {}

  // remove the node after the reference node
  removeAfter(refNodeValue) {}

  // OPTIONAL

  //merges the current list with a new list, appending the new list after the tail of the current list
  mergeAppend(newList) {}

  //merges the current list with a new list, by inserting the new list after the node in the index position.
  mergeAfterIndex(newList, index) {}
}

module.exports = LinkedList;
