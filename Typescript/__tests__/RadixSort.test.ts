import radixSort from "../code/RadixSort";

test("radix sort", () => {
  const arr = [234, 567, 123, 2, 789, 456, 42, 890, 345, 678, 901, 14, 234, 567, 123, 89, 789, 456, 890];
  const sortedArr = radixSort(arr);
  expect(sortedArr).toEqual([2, 14, 42, 89, 123, 123, 234, 234, 345, 456, 456, 567, 567, 678, 789, 789, 890, 890, 901]);
});
