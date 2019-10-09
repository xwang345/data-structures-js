class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
    console.log(this);
  }
  append(value) {
    const newNode = new Node(value);
    console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    console.log(`This is head ${JSON.stringify(this)}`);
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    console.log(`This is head ${JSON.stringify(this.head)}`);
    this.head = newNode;
    console.log(`This is new head ${JSON.stringify(this.head)}`);
    this.length++;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
console.log(`===========Call print list======= \n`);
myLinkedList.printList();