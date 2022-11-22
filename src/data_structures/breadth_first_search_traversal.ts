import { BinarySearchTree } from "./BinarySearchTree";

export function bfs(tree: BinarySearchTree) {
  const queue = [tree.root];
  const visited = [];
  while (queue.length) {
    const node = queue.shift();
    visited.push(node);
    if (node?.left) {
      queue.push(node.left);
    }
    if (node?.right) {
      queue.push(node.right);
    }
  }
  return visited;
}
