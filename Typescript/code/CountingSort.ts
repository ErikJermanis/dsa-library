// Time complexity: O(n+k)
// Space complexity: O(n+k)

export default function countingSort(arr: number[]): number[] {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const countArr = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = countArr[arr[i]] + 1;
  }
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i] + countArr[i - 1];
  }
  const outArr: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    outArr[countArr[arr[i]] - 1] = arr[i];
    countArr[arr[i]] = countArr[arr[i]] - 1;
  }
  return outArr;
}
