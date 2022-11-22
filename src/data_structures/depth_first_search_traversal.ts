import { BinarySearchTree } from "./BinarySearchTree";
import { TreeNode } from "./TreeNode";

export function dfs_pre_order(tree: BinarySearchTree) {
  const visited: any[] = [];
  traverse(tree.root!, visited);
  return visited;

  function traverse(node: TreeNode, arr: any[]) {
    arr.push(node.value); // pre order -> mark the item as visited before exploring the sides
    if (node.left) {
      traverse(node.left, arr);
    }
    if (node.right) {
      traverse(node.right, arr);
    }
  }
}

export function dfs_post_order(tree: BinarySearchTree) {
  const visited: any[] = [];
  traverse(tree.root!, visited);
  return visited;
  function traverse(node: TreeNode, arr: any[]) {
    if (node.left) {
      traverse(node.left, arr);
    }
    if (node.right) {
      traverse(node.right, arr);
    }
    arr.push(node.value); // post order -> mark the item as visited after exploring the sides
  }
}

export function dfs_in_order(tree: BinarySearchTree) {
  const visited: any[] = [];
  traverse(tree.root!, visited);
  return visited;
  function traverse(node: TreeNode, arr: any[]) {
    if (node.left) {
      traverse(node.left, arr);
    }

    arr.push(node.value); // in order -> mark the item as visited after exploring the left side

    if (node.right) {
      traverse(node.right, arr);
    }
  }
}
