function linearSearch(arr: number[], n: number): number {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == n) return i;
	}
	return -1;
}
