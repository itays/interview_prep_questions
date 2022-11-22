import { NodeItem } from "./NodeItem";

export class Stack {
  first: NodeItem | null;
  last: NodeItem | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /**
   * pushed a node to the beginning
   */
  push(node: NodeItem) {
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const currentFirst = this.first;
      this.first = node;
      this.first.next = currentFirst;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    const currentFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentFirst.next;
    }
    this.size--;
    return currentFirst;
  }
}
