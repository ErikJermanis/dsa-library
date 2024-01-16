// Time complexity: O(n^2)
// Space complexity: O(1)

export default function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    const current = arr[i];
    while (j > 0 && current < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
}
