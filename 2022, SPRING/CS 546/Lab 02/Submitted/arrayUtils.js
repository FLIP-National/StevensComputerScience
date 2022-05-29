const validArray = function validArray(array) {
    if(array === undefined){
        throw new Error("No Array Exists.");
    }
    else if (!Array.isArray(array)){
        throw new Error("Not a Proper Array.");
    }
    else if(array.length == 0){
        throw new Error("Array is Empty.");
    }
    else {
        for(i in array) {
            if(typeof(array[i]) != "number") {
                // console.log(typeof(array[i]));
                throw new Error("Array has value that is not a Number!");
            }
        }
    }
    return true;
}

const mean = function mean(array) {
    var meanValue = 0;

    if(validArray(array)){
        for(i in array){
            meanValue += array[i];
        }
    }

    return meanValue / array.length;
}

// TEST: MEAN
// console.log(mean([2, 3, 4]));
// console.log(mean([]));
// console.log(mean("banana"));
// console.log(mean(["guitar", 1, 3, "apple"]));
// console.log(mean());

const medianSquared = function medianSquared(array) {   
    if(validArray(array)) {
        var arrayMid = Math.ceil(array.length/2);
        var medianValue = 0;

        // Snippet From Stack Overflow because js sort() is weird.
        // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
        array.sort(function(a,b){
            return a - b;
        });

        if(array.length % 2 == 0){
            medianValue = (array[arrayMid] + array[arrayMid - 1])/2;
            // console.log(medianValue);  
        }
        else {
            medianValue = array[arrayMid-1];
            // console.log(medianValue);
        }

        return medianValue * medianValue;
    } 
}

//----------TEST: 
// console.log(medianSquared([4, 1, 2, 6, 9]));
// console.log(medianSquared([4, 1, 2]));                  // Returns: 4
// console.log(medianSquared([]));                         // throws an error
// console.log(medianSquared("banana"));                   // throws an error
// console.log(medianSquared(1,2,3));                      // throws an error
// console.log(medianSquared(["guitar", 1, 3, "apple"]));  // throws an error
// console.log(medianSquared());                           // throws an error

const maxElement = function maxElement(array) {
    if(validArray(array)){
        const maxObj = {};
        let arrayDupe = array;
        // Snippet From Stack Overflow because js sort() is weird.
        // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
        array.sort(function(a,b){
            return a - b;
        });
        let maxNum = array[array.length - 1];
        let maxIndex = arrayDupe.indexOf(maxNum);
        maxObj[maxNum] = maxIndex;
        // console.log(array);
        return maxObj;
    }
}

//--------------TEST:
// console.log(maxElement([5,6,8,7,10,100]));
// console.log(maxElement([5, 6, 7]));
// console.log(maxElement([]);
// console.log(maxElement());
// console.log(maxElement("test"));
// console.log(maxElement([1,2,"nope"]));

const fill = function fill(end, value) {
    if(end === undefined) {
        throw new Error("The end param does not exist!");
    }
    else if ((typeof end) != "number"){
        throw new Error("The end param is not a number.");
    }
    else if (end <= 0) {
        throw new Error("The end param is a not a positive number.")
    }
    else if (value === undefined) {
        const array = [];
        let count = 0;
        while(count != end){
            array.push(count);
            count++;

        }
        return array;
    }
    else {
        const array = [];
        while(end != 0){
            array.push(value);
            end--;
        }
        return array;
    }
}


//---------TEST:
// console.log(fill(6));
// console.log(fill(3,"welcome"));
// console.log(fill());
// console.log(fill("test"));
// console.log(fill(0));
// console.log(fill(-4));

const countRepeating = function countRepeating(array) {
    if(array === undefined){
        throw new Error("No Array Exists.");
    }
    else if (!Array.isArray(array)){
        throw new Error("Not a Proper Array.");
    }
    else if(array.length == 0){
        return {};
    }
    else {
        const numDups = {};
        // puts all duplicates into properties:
        array.forEach(function (i) {
            numDups[i] = (numDups[i] || 0) + 1;
        })
        for(x in numDups){
            // console.log(x);
            // console.log(numDups[x]);
            if(numDups[x] == 1){
                // console.log("i want to remove...");
                delete numDups[x];
            }
        }
        return numDups;
    }
}

// -----------TEST:
// console.log(countRepeating([7, '7', 13, true, true, true, "Hello","Hello", "hello"]));
// console.log([7, '7', 13, true, true, true, "Hello","Hello", "hello"].sort());
// console.log(countRepeating("foobar"));
// console.log(countRepeating([]));
// console.log(countRepeating({a: 1, b: 2, c: "Patrick"}));

const isEqual = function isEqual(arrayOne, arrayTwo) {
    if(arrayOne === undefined || arrayTwo === undefined){
        throw new Error("Existential Error: Missing Arrays Exists.");
    }
    else if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
        throw new Error("Type Error: Unproper Arrays.")
    }
    else if(arrayOne.length != arrayTwo.length) {
        // console.log(false);
        return false;
    }
    else {
        arrayOne.sort();
        arrayTwo.sort();

        for(i in arrayOne) {
            if(Array.isArray(arrayOne[i])) {
                if(!isEqual(arrayOne[i], arrayTwo[i])){
                    // console.log("smaller arrays are not equal!");
                    return false;
                }
            }
            else if (arrayOne[i] != arrayTwo[i]){
                // console.log("uh oh not working!");
                // console.log(arrayOne[i]);
                // console.log(arrayTwo[i]);
                return false;
            }   
        }
        return true;
    }
}


// ---------TEST:
// console.log(isEqual([1, 2, 3], [3, 1, 2]));
// console.log(isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']));
// console.log(isEqual([1, 2, 3], [4, 5, 6]));
// console.log(isEqual([1, 2, 3], [4, 5, 6])); // Returns: false
// console.log(isEqual([1, 3, 2], [1, 2, 3, 4])); // Returns: false
// console.log(isEqual([1, 2], [1, 2, 3])); // Returns: false
// console.log(isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]])); // Returns: true
// console.log(isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 10, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 10 ]]));
// console.log(isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 11 ], [ 9, 7, 8 ]])); // Returns: false

// console.log([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]].sort());
// console.log([[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]].sort());

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