import linearSearch from "../code/LinearSearch";

test("linear search", () => {
  const arr = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
  expect(linearSearch(arr, 3)).toBe(-1);
  expect(linearSearch(arr, 10)).toBe(2);
  expect(linearSearch(arr, 20)).toBe(4);
  expect(linearSearch(arr, 31)).toBe(-1);
  expect(linearSearch(arr, 70)).toBe(14);
  expect(linearSearch(arr, 78)).toBe(-1);
});
