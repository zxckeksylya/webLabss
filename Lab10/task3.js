var task3array1 = ['a', 'b', 'a', 'c', 'c', 'a', 't'];
var task3array2 = ['a', 'c', 'c', 'a', 's'];
var task3array3 = ['t', 'k', 'n', 'a'];
function clearArray(arr) {
    return arr.filter(function (c, index, boolarr) { return boolarr.indexOf(c) == index; });
}
function arrayOfThreeArrays(arr1, arr2, arr3) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!(arr2.includes(arr1[i]) && arr3.includes(arr1[i]))) {
            newArray.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (!(arr1.includes(arr2[i]) && arr3.includes(arr2[i]))) {
            newArray.push(arr2[i]);
        }
    }
    for (var i = 0; i < arr3.length; i++) {
        if (!(arr1.includes(arr3[i]) && arr2.includes(arr3[i]))) {
            newArray.push(arr3[i]);
        }
    }
    return clearArray(newArray);
}
console.log(arrayOfThreeArrays(clearArray(task3array1), clearArray(task3array2), clearArray(task3array3)));
