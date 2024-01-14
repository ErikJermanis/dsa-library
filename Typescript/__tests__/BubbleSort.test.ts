import bubbleSort from "../code/BubbleSort";

test("bubble sort", () => {
  const arr = [987, 123, 456, 789, 234, 567, 890, 345, 678, 901, 432, 765, 198, 543, 876];
  bubbleSort(arr);
  expect(arr).toEqual([123, 198, 234, 345, 432, 456, 543, 567, 678, 765, 789, 876, 890, 901, 987]);
});
