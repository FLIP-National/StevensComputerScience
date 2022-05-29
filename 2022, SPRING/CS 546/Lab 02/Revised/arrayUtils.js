/*
    Helper Function takes in an Array Parameter.
    Checks if the array is a valid number array.
    Returns a boolean.
*/
const validArray = function validArray(array) {
    if(!array) throw ": Missing parameter 'array'.";
    if(!Array.isArray(array)) throw ": Incorrect data type, expecting array.";
    if(array.length == 0) throw ": Empty array.";
    return array.every(element => { return typeof element === 'number'; });
}

/*
    Function mean takes in an Array Parameter.
    Returns the mean value of the elements of an array.
*/
const mean = function mean(array) {
    // -- Error Checking --
    if(!array) throw ": Missing parameter 'array'";
    if(!validArray(array)) throw ": Invalid Array.";

    // -- Finds Mean --
    return array.reduce((a, b) => a + b, 0) / array.length;
}

/*
    Function medianSquared takes in an Array Parameter.
    Returns the median value of the elements of an array squared.
*/
const medianSquared = function medianSquared(array) {  
    // -- Error Checking --
    if(!array) throw ": Missing parameter 'array'";
    if(!validArray(array)) throw ": Invalid Array."; 
   
    // -- Retrieves Middle Index --
    let mid_index = Math.ceil(array.length/2);

    // -- Sort Array --
    array.sort(function(a,b){ return a - b; });

    // -- Get Median and Squares It --
    return array.length % 2 == 0 ? Math.pow(medianValue = (array[mid_index] + array[mid_index - 1])/2, 2)
            : medianValue = Math.pow(array[mid_index - 1], 2);
}

/*
    Function maxElement takes in an Array Parameter.
    Returns an Object of the maximum element and it's index.
*/
const maxElement = function maxElement(array) {
    // -- Error Checking --
    if(!array) throw ": Missing parameter 'array'";
    if(!validArray(array)) throw ": Invalid Array."; 

    // -- Duplicate Original Array --
    let arrayDupe = array.slice();

    // -- Sort Array --
    array.sort(function(a,b){ return a - b; });

    // -- Create Empty Object, Store Max Num, Store Max Index in Object --
    const maxObj = {};
    let maxNum = array[array.length - 1];
    let maxIndex = arrayDupe.indexOf(maxNum);
    maxObj[maxNum] = maxIndex;
    
    return maxObj;
}

/*
    Function fill takes in an Number Parameter.
    The second number parameter is optional.

    If only the end parameter is provided:
    Returns an array of numbers counting up to the end.

    If both parameters are provided:
    Returns an array of the value 'end' amount of times.
*/
const fill = function fill(end, value) {
    // -- Error Checking --
    if(!end) throw ": Missing parameter 'end'";
    if((typeof end) != "number") throw ": Invalid data type, expecting a Number.";
    if(end <= 0) throw ": Invalid range, parameter must be a positive number.";

    // -- Fill Array with Numbers, or Fill Array with 'value' --
    return !value ? Array.apply(null, Array(end)).map(function (x, i) { return i; })
            : Array.apply(null, Array(end)).map(function () { return value; });;  
}

/*
    Function countRepeating takes in an Array Parameter.
    Returns an object with the count of each element that is repeating.
*/
const countRepeating = function countRepeating(array) {
    // -- Error Checking --
    if(!array) throw ": Missing parameter 'array'";
    if(!Array.isArray(array)) throw ": Incorrect data type, expecting array.";
    if(array.length == 0) return {};
   
    // -- Creates Empty Object --
    const numDups = {};
    
    // -- Store Number and Amount --
    array.forEach(function (i) { numDups[i] = (numDups[i] || 0) + 1; });

    // -- Remove if Amount is 1 --
    for(x in numDups){
        if(numDups[x] == 1) delete numDups[x];
    }

    return numDups;
}

/*
    Function isEqual takes in two Array Parameters.
    Returns a boolean representing whether the two arrays are equal.
*/
const isEqual = function isEqual(arrayOne, arrayTwo) {
    // -- Error Checking --
    if(!arrayOne) throw ": Missing parameter 'arrayOne'";
    if(!arrayTwo) throw ": Missing parameter 'arrayTwo'";
    if(!Array.isArray(arrayOne)) throw ": Incorrect data type, expecting array.";
    if(!Array.isArray(arrayTwo)) throw ": Incorrect data type, expecting array.";
    if(arrayOne.length != arrayTwo.length) return false;
    
    // -- Sort Arrays --
    arrayOne.sort();
    arrayTwo.sort();

    // -- Checks if arrays are Equal --
    for(i in arrayOne) {
        if(Array.isArray(arrayOne[i])) {
            if(!isEqual(arrayOne[i], arrayTwo[i])) return false;
        }  
        else {
            if(arrayOne[i] != arrayTwo[i]) return false;
        }   
    }
    
    return true; 
}

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    mean,
    medianSquared,
    maxElement,
    fill,
    countRepeating,
    isEqual
};