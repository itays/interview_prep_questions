import { TreeNode } from "./TreeNode";

export class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: any) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value: string) {
    if (!this.root) {
      return null;
    }
    let currentNode: TreeNode | null = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}
