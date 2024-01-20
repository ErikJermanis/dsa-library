import DoublyLinkedList from "../code/DoublyLinkedList";

test("doubly linked list", () => {
  const list = new DoublyLinkedList<number>();
  expect(list.length).toBe(0);
  expect(() => list.get(0)).toThrow("Index out of bounds");
  list.append(1);
  list.append(3);
  list.append(6);
  expect(list.length).toBe(3);
  expect(list.get(1)).toBe(3);
  expect(list.removeAt(1)).toBe(3);
  expect(list.shift()).toBe(1);
  expect(list.pop()).toBe(6);
  expect(list.length).toBe(0);
});
