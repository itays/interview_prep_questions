import { BinarySearchTree } from "../BinarySearchTree";
import {
  dfs_pre_order,
  dfs_post_order,
  dfs_in_order,
} from "../depth_first_search_traversal";

describe("dfs", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(3);
  tree.insert(8);
  tree.insert(15);
  tree.insert(20);

  test("dfs_pre_order", () => {
    expect(dfs_pre_order(tree)).toStrictEqual([10, 6, 3, 8, 15, 20]);
  });

  test("dfs_post_order", () => {
    expect(dfs_post_order(tree)).toStrictEqual([3, 8, 6, 20, 15, 10]);
  });

  test("dfs_in_order", () => {
    expect(dfs_in_order(tree)).toStrictEqual([3, 6, 8, 10, 15, 20]);
  });
});
