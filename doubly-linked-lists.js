class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
    console.log(`${JSON.stringify(this)}`);
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    console.log(newNode);
    console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    console.log(this);
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.printList();
      return this.append(value);
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = follower.next;
    follower.prev = leader.next;
    this.length--;
    console.log(this);
    return this.printList();
  }
}

console.log(`===========The Linked list========== \n`)
let myLinkedList = new LinkedList(10);
console.log(`===========Next append 5============ \n`);
myLinkedList.append(5);
console.log(`===========Next append 16============ \n`);
myLinkedList.append(16);
console.log(`===========Prepend 1============ \n`);
myLinkedList.prepend(1);
console.log(`===========This is insert function======= \n`);
myLinkedList.insert(2, 73);
myLinkedList.insert(10, 75);
// console.log(`===========Call print list======= \n`);
// myLinkedList.printList();
console.log(`===========Delete second node value======= \n`);
myLinkedList.remove(2);
