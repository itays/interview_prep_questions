/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]


Example 3:

Input: root = []
Output: []
 */

import { BinarySearchTree } from "../data_structures/BinarySearchTree";
import { TreeNode } from "../data_structures/TreeNode";

const tree = new BinarySearchTree();
tree.root = new TreeNode("3");
tree.root.left = new TreeNode("9");
tree.root.right = new TreeNode("20");
tree.root.right.left = new TreeNode("15");
tree.root.right.right = new TreeNode("7");

console.log(tree);
