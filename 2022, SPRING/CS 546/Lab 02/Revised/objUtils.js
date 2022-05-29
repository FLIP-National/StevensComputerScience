const isObjectArray = function isObjectArray(objects) {
    for(i in objects) {
        // console.log(typeof(objects[i]));
        if(typeof(objects[i]) != "object") {
            throw new Error("Invalid Object in Array.");
        }
        if(Object.keys(objects[i]).length == 0) {
            throw new Error("Object in Array is Empty.");
        }
    }

    return true;
}

const validValues = function validValues(object){
    for(i in object) {
        if(typeof(object[i]) != "number") {
            throw new Error("Type Error: Values should be a number.");
        }
    }

    return true;
}

const makeArrays = function makeArrays(objs){
    if(objs === undefined){
        throw new Error("No Array Exists.");
    }
    else if (!Array.isArray(objs)){
        throw new Error("Not a Proper Array.");
    }
    else if(objs.length < 2){
        throw new Error("Array has invalid size.");
    }
    else {
        isObjectArray(objs);
        var newArray = [];
        for(i in objs) {
            for (j in objs[i]) {
                let tempArray = [];
                tempArray.push(j);
                tempArray.push(objs[i][j]);
                newArray.push(tempArray);
            }
        }
        return newArray;
    }
}

/*
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
const fourth = {};
console.log([first, second, third].length);
console.log(makeArrays([first, second, third]));
console.log(makeArrays([second, third]));
console.log(makeArrays([third, first, second]));
console.log(makeArrays([fourth, fourth]));
console.log(Object.keys(fourth).length);
*/

const isDeepEqual = function isDeepEqual(objOne, objTwo){
    // console.log(typeof(objTwo));
    if(objOne === undefined || objTwo === undefined) {
        throw new Error("Missing parameters");
    }
    else if(typeof(objOne) != "object" || typeof(objTwo) != "object") {
        throw new Error("Type of parameter is wrong.");
    }
    else if(Array.isArray(objOne) || Array.isArray(objTwo)) {
        throw new Error("Type of parameter is wrong.");
    }
    else {
        for(i in objOne) {
            if(typeof(objOne[i]) == "object" && typeof(objTwo[i]) == "object") {
                isDeepEqual(objOne[i], objTwo[i]);
            }
            if(objOne[i] != objTwo[i]) {
                return false;
            }
        }

        return true;
    }
}

/*
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"};
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
console.log(isDeepEqual(first, second)); // false
console.log(isDeepEqual(forth, fifth)); // true
console.log(isDeepEqual(forth, third)); // false
console.log(isDeepEqual({}, {})); // true
console.log(isDeepEqual([1,2,3], [1,2,3])); // throws error 
console.log(isDeepEqual("foo", "bar")); // throws error
*/

const computeObject = function computeObject(object, func) {
    if(object === undefined || func === undefined) {
        throw new Error("Missing parameter.");
    }
    else if (typeof(object) != "object" || (typeof(func) != "function")) {
        throw new Error("Type of parameter is wrong.");
    }
    else {
        validValues(object);
        for(i in object) {
            object[i] = func(object[i]);
        }

        return object;
    }
}

// console.log(computeObject({ a: 3, b: 7, c: 5 }, n => n * 2));

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    makeArrays,
    isDeepEqual,
    computeObject
};