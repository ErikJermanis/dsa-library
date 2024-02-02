import Queue from "../code/Queue";

test("queue", () => {
  const queue = new Queue<number>();
  expect(queue.length).toBe(0);
  expect(queue.peek()).toBe(undefined);
  expect(queue.enqueue(3)).toBe(1);
  expect(queue.peek()).toBe(3);
  expect(queue.enqueue(6)).toBe(2);
  expect(queue.peek()).toBe(3);
  expect(queue.length).toBe(2);
  expect(queue.dequeue()).toBe(3);
  expect(queue.length).toBe(1);
  expect(queue.peek()).toBe(6);
  expect(queue.dequeue()).toBe(6);
  expect(queue.peek()).toBe(undefined);
  expect(queue.length).toBe(0);
});
