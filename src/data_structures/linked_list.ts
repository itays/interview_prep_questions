import { NodeItem } from "./NodeItem";

export class LinkedList {
  head: NodeItem | null;
  tail: NodeItem | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * runtime O(1)
   * space O(1)
   * pushing a node to the end of the list
   */
  push(node: NodeItem) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * removes a node from the end of the list
   */
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  /**
   * removes a node from the beginning of the list
   */
  shift() {
    if (!this.head) return;
    const current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  /**
   * pushes a node from the beginning of the list
   */
  unshift(node: NodeItem) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  /**
   * empty the list
   */
  clear() {
    if (!this.head) return;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * get a node item by index
   */
  get(index: number) {
    if (!this.head || index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next!;
      counter++;
    }
    return current;
  }

  /**
   * Changing the value of a node based on it's position in the list
   */
  set(newValue: string, index: number) {
    if (!this.get(index)) return false;
    this.get(index)!.value = newValue;
    return true;
  }
  /**
   * inserts a new node at a given index
   */
  insert(index: number, node: NodeItem) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(node);
    }
    if (index === this.length) {
      return this.push(node);
    }
    const prev = this.get(index - 1);
    node.next = prev!.next;
    prev!.next = node;
    this.length++;
    return true;
  }

  /**
   * Removes a node at a given index
   */
  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    const prev = this.get(index - 1)!;
    const removed = prev.next!;
    prev.next = removed?.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head; // save head
    this.head = this.tail; // update head to tail
    this.tail = node; // set tail to head
    let next; // something to save the real next
    let prev = null; // something to save the prev
    for (let i = 0; i < this.length; i++) {
      next = node?.next; // save the original next node
      node!.next = prev; // point the current node's next to prev node
      prev = node; // set prev to now be the current node
      node = next!; // set node to now be the original next and continue on
    }
  }
}
