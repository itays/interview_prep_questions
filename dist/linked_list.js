class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}
const list = new LinkedList();
list.push(new LinkedListNode("one"));
console.log(list);
//# sourceMappingURL=linked_list.js.map