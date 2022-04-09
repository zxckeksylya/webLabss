let array = [
    ['-','-','-','-','-','-','-','-','-','-','-','-'], 
    ['-','#','*','*','*','*','*','*','*','*','*','-'],
    ['-','#','*','#','#','#','*','#','*','*','*','-'],
    ['-','#','*','*','*','*','*','#','*','#','*','-'],
    ['-','#','*','*','#','*','*','*','*','*','*','-'],
    ['-','*','*','*','*','*','*','*','*','*','*','-'],
    ['-','*','*','*','#','*','*','#','#','*','*','-'],
    ['-','*','*','*','*','*','*','*','*','*','*','-'],
    ['-','*','#','#','*','*','*','*','*','*','*','-'],
    ['-','*','*','*','*','*','*','#','*','#','*','-'],
    ['-','*','*','*','#','*','*','*','*','*','*','-'],
    ['-','-','-','-','-','-','-','-','-','-','-','-'] 
]

function outputArray(arr:string[][]){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(''))
    }
}
function outputNumberArray(arr:number[][]){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(''))
    }
}
function outputNewArray(arr:string[][]):number{
    let newArray:number[][]=[];
    let bufferArray:number[]=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            bufferArray.push(0);
        }
        newArray.push(bufferArray);
        bufferArray=[];
    }
    let count:number=0;
    for(let i:number=1;i<arr.length-1;i++){
        for(let j:number=1;j<arr[i].length-1;j++){

            if(arr[i][j]=='-'||arr[i][j]=='*'){
                
            }else if(arr[i][j]=='#'){
                if(arr[i-1][j]=='-'||arr[i-1][j]=='*'){
                    if(arr[i][j-1]=='-'||arr[i][j-1]=='*'){
                        count++;
                        newArray[i][j]=count;
                    }else{
                        newArray[i][j] = newArray[i][j-1]
                    }
                }else{
                    newArray[i][j] = newArray[i-1][j]
                }
            }
        }
    }
    return count;
}
console.log(outputNewArray(array))
