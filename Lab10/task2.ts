let array2: number[] = [1, 0, -4, 5, 6, -7, -2, 3, 8];

function maxSum(arr: number[]): number {
  let max: number = 0;
  let sum: number = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    if (arr[index] > sum) {
      sum = arr[index];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSum(array2));
