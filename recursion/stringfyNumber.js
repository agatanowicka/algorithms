
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


function stringifyNumbers(obj) {
    let newObject = {};
    for (key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObject[key] = stringifyNumbers(obj[key]);
        } else if (typeof obj[key] === "number") {
            newObject[key] = obj[key].toString();
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

console.log(stringifyNumbers(obj));

