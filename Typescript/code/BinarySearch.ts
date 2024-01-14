// Time complexity: O(log n)
// Space complexity: O(1)

export default function binarySearch(arr: number[], n: number): number {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;
    if (arr[mid] === n) return mid;
    if (arr[mid] < n) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
