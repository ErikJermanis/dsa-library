import Uint8RingBuffer from "../code/RingBuffer";

test("ring buffer", () => {
  const buffer = new Uint8RingBuffer(4);
  expect(buffer.print()).toBe("[]");
  expect(buffer.enqueue(4)).toBe(1);
  expect(buffer.print()).toBe("[4]");
  expect(buffer.enqueue(2)).toBe(2);
  expect(buffer.print()).toBe("[4, 2]");
  expect(buffer.enqueue(6)).toBe(3);
  expect(buffer.enqueue(9)).toBe(4);
  expect(buffer.print()).toBe("[4, 2, 6, 9]");
  expect(buffer.enqueue(3)).toBe(4);
  expect(buffer.print()).toBe("[2, 6, 9, 3]");
  expect(buffer.dequeue()).toBe(2);
  expect(buffer.print()).toBe("[6, 9, 3]");
  expect(buffer.dequeue()).toBe(6);
  expect(buffer.dequeue()).toBe(9);
  expect(buffer.dequeue()).toBe(3);
  expect(buffer.dequeue()).toBe(undefined);
  expect(buffer.print()).toBe("[]");
});
