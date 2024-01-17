// Time complexity: O(nlogn)
// Space complexity: O(n)

function merge(arrA: number[], arrB: number[], lo: number, mid: number, hi: number): void {
  let i = lo;
  let j = mid;
  for (let k = lo; k < hi; k++) {
    if (i < mid && (j >= hi || arrB[i] <= arrB[j])) {
      arrA[k] = arrB[i];
      i++;
    } else {
      arrA[k] = arrB[j];
      j++;
    }
  }
}
function splitMerge(arrB: number[], arrA: number[], lo: number, hi: number): void {
  if (hi - lo < 2) return;
  const mid = Math.floor((lo + hi) / 2);
  splitMerge(arrA, arrB, lo, mid);
  splitMerge(arrA, arrB, mid, hi);
  merge(arrB, arrA, lo, mid, hi);
}

export default function mergeSort(arr: number[]): void {
  const arrB = [...arr];
  splitMerge(arr, arrB, 0, arr.length);
}
