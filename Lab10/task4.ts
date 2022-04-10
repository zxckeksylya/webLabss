let sentence:string = 'Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч.';

function checkPanagrama(str:string):boolean{
    let arrForCheck:string[]=str.toLowerCase().split('').filter(p=>(p != ' ' && p != ',' && p != '.' && p != '—' && p != '!' && p != '?'));
    let newArr:string[]=[];
    let k:boolean=true
    for(let i=0;i<arrForCheck.length;i++){
        if(newArr.find(p=>p==arrForCheck[i])){
            k=false;
            break;
        }else{
            newArr.push(arrForCheck[i])
        }
    }

    if(!(newArr.length==33)){
        k=false
    }
    return k;
}

console.log(checkPanagrama(sentence))