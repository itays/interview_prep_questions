import { NodeItem } from "./NodeItem";
import { TreeNode } from "./TreeNode";

export class Queue {
  head: NodeItem | TreeNode | null;
  tail: NodeItem | TreeNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // adds a node to the end
  enqueue(node: NodeItem | TreeNode) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
    return this.size;
  }

  // removes a node from the beginning
  dequeue() {
    if (!this.head) {
      return null;
    }
    const currentHead = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
    }
    this.size--;
    return currentHead;
  }
}
