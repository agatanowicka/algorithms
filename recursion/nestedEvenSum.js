function nestedEvenSum(object) {
    let sum = 0;
    for (key in object) {
        if (typeof object[key] ==="object"  ) {
            let nestedEvenSumFunction = nestedEvenSum(object[key]);
            sum += nestedEvenSumFunction;
        } else if ( typeof object[key] === "number" && object[key] % 2 === 0) {
            sum += object[key]
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10