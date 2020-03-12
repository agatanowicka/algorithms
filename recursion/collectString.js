function collectStrings(obj) {
    let arrayOfString = [];
    for (key in obj) {
        if (typeof obj[key] === "object") {
            let smallArray=collectStrings(obj[key]);
            arrayOfString=arrayOfString.concat(smallArray);
        } else {
            arrayOfString.push(obj[key].toString());
        }
    }
    return arrayOfString;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])