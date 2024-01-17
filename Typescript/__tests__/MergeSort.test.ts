import mergeSort from "../code/MergeSort";

test("merge sort", () => {
  const arr = [234, 567, 123, 789, 456, 890, 345, 678, 901, 234, 567, 123, 789, 456, 890];
  mergeSort(arr);
  expect(arr).toEqual([123, 123, 234, 234, 345, 456, 456, 567, 567, 678, 789, 789, 890, 890, 901]);
});
