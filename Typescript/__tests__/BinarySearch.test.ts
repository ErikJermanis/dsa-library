import binarySearch from "../code/BinarySearch";

test("binary search", () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(binarySearch(foo, 69)).toBe(3);
  expect(binarySearch(foo, 1336)).toBe(-1);
  expect(binarySearch(foo, 69420)).toBe(10);
  expect(binarySearch(foo, 69421)).toBe(-1);
  expect(binarySearch(foo, 1)).toBe(0);
  expect(binarySearch(foo, 0)).toBe(-1);
});
