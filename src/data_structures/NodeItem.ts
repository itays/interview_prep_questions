export class NodeItem {
  value: any;
  next: NodeItem | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
