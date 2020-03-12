function flatten(array){
    let newArray=[];
    for(let i=0; i<array.length; i++){
        let element= array[i];
        if(Array.isArray(element)){
            const smallArray= flatten(element);
            newArray = newArray.concat(smallArray);
        }else{
            newArray.push(element);
        }
    }
    return newArray;
  }

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3