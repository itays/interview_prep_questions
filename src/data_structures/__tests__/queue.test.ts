import { NodeItem } from "../NodeItem";
import { Queue } from "../queue";

describe("Queue", () => {
  test("enqueue", () => {
    const queue = new Queue();
    queue.enqueue(new NodeItem("one"));
    expect(queue.size).toBe(1);
    expect(queue.head?.value).toBe("one");
    expect(queue.tail?.value).toBe("one");
    queue.enqueue(new NodeItem("two"));
    expect(queue.size).toBe(2);
    expect(queue.tail?.value).toBe("two");
  });

  test("dequeue", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    queue.enqueue(new NodeItem("one"));
    expect(queue.dequeue()?.value).toBe("one");
    expect(queue.size).toBe(0);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
  });
});
