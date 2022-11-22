import { BinarySearchTree } from "../BinarySearchTree";
import { bfs } from "../breadth_first_search_traversal";

test("bfs", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(3);
  tree.insert(8);
  tree.insert(15);
  tree.insert(20);
  bfs(tree);
  console.log(tree);
});
