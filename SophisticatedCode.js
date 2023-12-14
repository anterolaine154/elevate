/* 
   Filename: SophisticatedCode.js

   Description: This code implements a complex linked list data structure and provides various operations and functionalities on it.
*/

// Define a Node class representing a single node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class representing the linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Function to add a node to the end of the linked list
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Function to remove a node from the linked list based on data
  remove(data) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        if (prevNode) {
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode === this.tail) {
          this.tail = prevNode;
        }

        this.size--;
        return true;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  // Function to search for a node in the linked list based on data
  search(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  // Function to get the size of the linked list
  getSize() {
    return this.size;
  }

  // Function to print the linked list
  print() {
    let currentNode = this.head;
    let listString = "";

    while (currentNode) {
      listString += currentNode.data + " -> ";
      currentNode = currentNode.next;
    }

    listString += "null";
    console.log(listString);
  }
}

// Create a new linked list
const linkedList = new LinkedList();

// Test the functionality
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);

console.log("Linked List:");
linkedList.print();

console.log("Removing 30 from the Linked List...");
linkedList.remove(30);
linkedList.print();

console.log("Size of the Linked List:", linkedList.getSize());

console.log("Searching for 20 in the Linked List:", linkedList.search(20));
console.log("Searching for 30 in the Linked List:", linkedList.search(30));

// Output:
// Linked List: 10 -> 20 -> 30 -> 40 -> 50 -> null
// Removing 30 from the Linked List...
// 10 -> 20 -> 40 -> 50 -> null
// Size of the Linked List: 4
// Searching for 20 in the Linked List: true
// Searching for 30 in the Linked List: false