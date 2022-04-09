let task3array1:string[] = ['a','b','a','c','c','a','t'];
let task3array2:string[] = ['a','c','c','a','s'];
let task3array3:string[] = ['t','k','n','a'];

function clearArray(arr:string[]):string[]{
    return arr.filter((c,index,boolarr) => boolarr.indexOf(c) == index);
}

function arrayOfThreeArrays(arr1:string[],arr2:string[],arr3:string[]):string[]{

    let newArray:string[]=[];
    for(let i=0;i<arr1.length;i++){
        if(!(arr2.includes(arr1[i]) && arr3.includes(arr1[i]))){
            newArray.push(arr1[i])
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!(arr1.includes(arr2[i]) && arr3.includes(arr2[i]))){
            newArray.push(arr2[i])
        }
    }
    for(let i=0;i<arr3.length;i++){
        if(!(arr1.includes(arr3[i]) && arr2.includes(arr3[i]))){
            newArray.push(arr3[i])
        }
    }

    return clearArray(newArray);
}


console.log(arrayOfThreeArrays(clearArray(task3array1),clearArray(task3array2),clearArray(task3array3)));

