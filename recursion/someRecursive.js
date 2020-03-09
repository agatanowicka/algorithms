
function someRecursive(array, callback) {
  const element = array[0];
  const callbackResult = callback(element);
  if (array.length === 1) {
    return callbackResult;
  }
  let box = array.splice(1);
  
  let someRecursiveFunction = someRecursive(box,callback);
  
  if (callbackResult || someRecursiveFunction) {
    return true;
  } else {
    return false;
  }
}
const isOdd = function (val) {
  return val % 2 !== 0;
}
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false