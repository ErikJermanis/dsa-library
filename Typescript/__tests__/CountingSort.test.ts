import countingSort from "../code/CountingSort";

test("quick sort", () => {
  const arr = [1, 3, 5, 3, 0, 1, 5, 3, 2, 4, 0, 3, 3, 2, 0, 1, 4];
  const sortedArr = countingSort(arr);
  expect(sortedArr).toEqual([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5]);
});
