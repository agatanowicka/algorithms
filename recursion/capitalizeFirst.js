function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    let capitalizeFirstFunction = capitalizeFirst(array.slice(0, -1));
    capitalizeFirstFunction.push(array.slice(array.length - 1)[0][0].toUpperCase()+ array.slice(array.length-1)[0].substr(1))
    return capitalizeFirstFunction;
}
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
