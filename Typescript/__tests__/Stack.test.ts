import Stack from "../code/Stack";

test("stack", () => {
  const stack = new Stack<number>();
  expect(stack.length).toBe(0);
  expect(stack.peek()).toBe(undefined);
  expect(stack.push(4)).toBe(1);
  expect(stack.push(8)).toBe(2);
  expect(stack.peek()).toBe(8);
  expect(stack.pop()).toBe(8);
  expect(stack.length).toBe(1);
  expect(stack.pop()).toBe(4);
  expect(stack.pop()).toBe(undefined);
  expect(stack.length).toBe(0);
});
