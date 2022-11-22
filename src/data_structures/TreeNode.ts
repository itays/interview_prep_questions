export class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
