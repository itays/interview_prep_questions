import { NodeItem } from "../NodeItem";
import { Stack } from "../stack";

describe("stack", () => {
  test("push", () => {
    const stack = new Stack();
    expect(stack.push(new NodeItem("one"))).toBe(1);
    expect(stack.push(new NodeItem("two"))).toBe(2);
    expect(stack.first?.value).toBe("two");
  });

  test("pop", () => {
    const stack = new Stack();
    expect(stack.pop()).toBeNull();
    stack.push(new NodeItem("one"));
    expect(stack.pop()?.value).toBe("one");
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);
    stack.push(new NodeItem("one"));
    stack.push(new NodeItem("two"));
    stack.pop();
    expect(stack.first?.value).toBe("one");
    expect(stack.last?.value).toBe("one");
    expect(stack.size).toBe(1);
  });
});
