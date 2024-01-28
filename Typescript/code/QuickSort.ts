// Time complexity: between O(nlogn) and n^2
// Space complexity: O(logn)

function partition(arr: number[], lo: number, hi: number): void {
  if (hi - lo <= 0) return;
  const pivot = hi - 1;
  let index = lo;
  for (let i = lo; i < hi - 1; i++) {
    if (arr[i] <= arr[pivot]) {
      const temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
      index++;
    }
  }
  const temp = arr[index];
  arr[index] = arr[pivot];
  arr[pivot] = temp;
  partition(arr, lo, index);
  partition(arr, index + 1, hi);
}

export default function quickSort(arr: number[]): void {
  partition(arr, 0, arr.length);
}
