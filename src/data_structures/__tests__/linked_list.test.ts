import { LinkedList } from "../linked_list";
import { NodeItem } from "../NodeItem";

describe("LinkedList", () => {
  test("push", () => {
    const list = new LinkedList();
    list.push(new NodeItem("zero"));
    expect(list.length).toBe(1);
    expect(list.head?.value).toBe("zero");
    expect(list.tail?.value).toBe("zero");
    populateList(list);
    expect(list.length).toBe(5);
    expect(list.tail?.value).toBe("four");
  });

  test("pop", () => {
    const list = new LinkedList();
    expect(list.pop()).toBeUndefined();
    populateList(list);
    expect(list.pop()?.value).toBe("four");
    expect(list.tail?.value).toBe("three");
    expect(list.tail?.next).toBeNull();
    expect(list.length).toBe(3);
    list.pop();
    list.pop();
    list.pop();
    expect(list.length).toBe(0);
  });

  test("shift", () => {
    const list = new LinkedList();
    expect(list.shift()).toBeUndefined();
    populateList(list);
    expect(list.shift()?.value).toBe("one");
    expect(list.length).toBe(3);
    list.shift();
    list.shift();
    list.shift();
    expect(list.length).toBe(0);
    expect(list.tail).toBe(null);
  });

  test("unshift", () => {
    const list = new LinkedList();
    list.unshift(new NodeItem("one"));
    expect(list.length).toBe(1);
    expect(list.head?.value).toEqual(list.tail?.value);
    list.unshift(new NodeItem("two"));
    expect(list.length).toBe(2);
    expect(list.head?.value).toBe("two");
    expect(list.tail?.value).toBe("one");
  });

  test("clear", () => {
    const list = new LinkedList();
    populateList(list);
    list.clear();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("get", () => {
    const list = new LinkedList();
    expect(list.get(0)).toBeNull();
    populateList(list);
    expect(list.get(0)?.value).toBe("one");
    expect(list.get(3)?.value).toBe("four");
  });

  test("set", () => {
    const list = new LinkedList();
    expect(list.set("something", 2)).toBeFalsy();
    populateList(list);
    expect(list.set("newValue", 2)).toBe(true);
    expect(list.get(2)?.value).toBe("newValue");
  });

  test("insert", () => {
    const list = new LinkedList();
    const newNode = new NodeItem("hello");
    expect(list.insert(-1, newNode)).toBe(false);
    expect(list.insert(2, newNode)).toBe(false);
    populateList(list);
    expect(list.insert(0, newNode)).toBeTruthy();
    expect(list.insert(5, new NodeItem("bye"))).toBeTruthy();
    expect(list.tail?.value).toBe("bye");
    expect(list.insert(5, new NodeItem("before the end"))).toBe(true);
  });

  test("remove", () => {
    const list = new LinkedList();
    populateList(list);
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(4)).toBeUndefined();
    const popped = list.remove(3);
    expect(popped?.value).toBe("four");
    const shifted = list.remove(0);
    expect(shifted?.value).toBe("one");
    list.clear();
    populateList(list);
    const removed = list.remove(1);
    expect(removed?.value).toBe("two");
    expect(removed?.next).toBeNull();
    expect(list.head?.next?.value).toBe("three");
  });

  test("reverse", () => {
    const list = new LinkedList();
    populateList(list);
    list.reverse();
    console.log(list);
  });

  function populateList(list: LinkedList) {
    list
      .push(new NodeItem("one"))
      .push(new NodeItem("two"))
      .push(new NodeItem("three"))
      .push(new NodeItem("four"));
  }
});
