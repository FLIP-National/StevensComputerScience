/*
    Helper Function takes in an Array Parameter.
    Checks if the array is a valid object array.
    Returns a boolean.
*/
const validArray = function validArray(array) {
    if(!array) throw ": Missing parameter 'array'.";
    if(!Array.isArray(array)) throw ": Incorrect data type, expecting array.";
    if(array.length == 0) throw ": Empty array.";
    return array.every(element => { return typeof element === 'object' && Object.keys(element).length !== 0; });
}

/*
    Helper Function takes in an Object Parameter.
    Checks if the array is a valid object.
    Returns a boolean.
*/
const validObject = function validObject(object) {
    if(!object) throw ": Missing parameter 'object'";
    if(typeof object !== "object") throw ": Incorrect data type, expecting object.";
    if(Array.isArray(object)) throw ": Incorrect data type, no arrays.";
    return Object.values(object).every((value, _index, arr) => { return typeof value !== 'number' ? false : true; });
}

/*
    Function makeArray takes in an Array of Objects.
    Returns an array of arrays where an array of each key and value is an element in the array.
*/
const makeArrays = function makeArrays(arrayOfObjects){
    // -- Error Checking --
    if(!arrayOfObjects) throw ": Missing Parameter 'arrayOfObjects'.";
    if(!validArray(arrayOfObjects)) throw ": Invalid Array.";
    if(arrayOfObjects.length < 2) throw ": Invalid Array Size, should contain at least 2 elements.";
    
    // -- Initializing Final Array --
    let final = [];

    // -- Interating through Array and Pushing Key and Value into Final Array --
    arrayOfObjects.forEach(obj => {
        for(let [key, value] of Object.entries(obj)) {
            final.push([key, value]);
        }
    });
    
    return final;
}

/*
    Function isDeepEqual tkaes in two objects.
    Returns true if each field is equal, false if not.
*/
const isDeepEqual = function isDeepEqual(objOne, objTwo){
    // -- Error Checking --
    if(!objOne) throw ": Missing Parameter 'objOne'";
    if(!objTwo) throw ": Missing Parameter 'objTwo'";
    if(typeof objOne !== "object") throw ": Incorrect data type, expecting object.";
    if(typeof objTwo !== "object") throw ": Incorrect data type, expecting object.";
    if(Array.isArray(objOne)) throw ": Incorrect data type, no Arrays."
    if(Array.isArray(objTwo)) throw ": Incorrect data type, no Arrays."
    if(Object.keys(objOne).length !== Object.keys(objTwo).length) return false;

    // -- Interating through Object One and Comparing --
    for(let [key, value] of Object.entries(objOne)) {
        if(!objTwo[key]) return false;

        // -- Checks if Values are Objects then calls isDeepEqual if true --
        if(typeof value === "object") return isDeepEqual(objOne[key], objTwo[key]);
        else if (value != objTwo[key]) return false;
    }

    return true;
}

/*
    Function makeArray takes in an Object and a Function.
    Returns an Object where the function is applied to each value.
*/
const computeObject = function computeObject(object, func) {
    // -- Error Checking --
    if(!object) throw ": Missing Parameter 'object'";
    if(!func) throw ": Missing Parameter 'func'";
    if(!validObject(object)) throw ": Invalid Object.";
    if(typeof func !== "function") throw ": Incorrect data type, expecting function.";
    
    // -- Interating through Object and Apply Function to Value --
    return Object.fromEntries( Object.entries(object).map(([k, v], i) => [k, func(v)]));
}

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    makeArrays,
    isDeepEqual,
    computeObject
};