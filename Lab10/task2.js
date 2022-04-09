var array2 = [1, 0, -4, 5, 6, -7, -2, 3, 8];
function maxSum(arr) {
    var max = 0;
    var sum = 0;
    for (var index = 0; index < arr.length; index++) {
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
