import CircularLinkedList from "../code/CircularLinkedList";

test("circular linked list", () => {
  const list = new CircularLinkedList<number>();
  expect(list.length).toBe(0);
  expect(list.print()).toBe("");
  list.insert(2);
  expect(list.length).toBe(1);
  expect(list.print()).toBe("2 ");
  list.insert(6);
  expect(list.print()).toBe("2 6 ");
  list.insert(3);
  expect(list.length).toBe(3);
  expect(list.print()).toBe("2 3 6 ");
  list.insert(1);
  expect(list.length).toBe(4);
  expect(list.print()).toBe("1 2 3 6 ");
  list.insert(5);
  expect(list.length).toBe(5);
  expect(list.print()).toBe("1 2 3 5 6 ");
  list.delete(1);
  expect(list.length).toBe(4);
  expect(list.print()).toBe("2 3 5 6 ");
  list.delete(6);
  expect(list.length).toBe(3);
  expect(list.print()).toBe("2 3 5 ");
  list.delete(3);
  expect(list.length).toBe(2);
  expect(list.print()).toBe("2 5 ");
});