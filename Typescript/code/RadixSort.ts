// Time complexity: O(nk)
// Space complexity: O(n + k)

function getMax(arr: number[], n?: number): number {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = n !== undefined ? getNth(arr[i], n) : arr[i];
    if (current > max) {
      max = current;
    }
  }
  return max;
}

function getNth(number: number, n: number): number {
  return Math.floor(number / Math.pow(10, n)) % 10;
}

function countingSort(arr: number[], n: number): number[] {
  const max = getMax(arr, n);
  const countArr = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const curr = getNth(arr[i], n);
    countArr[curr] = countArr[curr] + 1;
  }
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i] + countArr[i - 1];
  }
  const outArr: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const nth = getNth(arr[i], n);
    outArr[countArr[nth] - 1] = arr[i];
    countArr[nth] = countArr[nth] - 1;
  }
  return outArr;
}

export default function radixSort(arr: number[]): number[] {
  const max = getMax(arr);
  const numOfDigitsOfMax = Math.floor(Math.log10(max)) + 1;
  let outArr: number[] = [...arr];
  for (let i = 0; i < numOfDigitsOfMax; i++) {
    outArr = countingSort(outArr, i);
  }
  return outArr;
}
