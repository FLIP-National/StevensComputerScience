const aUtils = require("./arrayUtils.js");
const sUtils = require("./stringUtils.js");
const oUtils = require("./objUtils.js");

// -----------------mean PASS: -----------------------
console.log("--- Mean Test Cases:");
try {
    const meanOne = aUtils. mean([2, 3, 4]);
    console.log('MEAN SUCCESS');
} catch (e) { console.error('MEAN FAILED'); }

try {
    const meanTwo = aUtils. mean([1, 2, 3]);
    console.log('MEAN SUCCESS');
} catch (e) { console.error('MEAN FAILED'); }

// ----------------mean FAIL: ------------------------
try {
    const meanThree = aUtils.mean(1234);
    console.error('MEAN FAILED');
} catch (e) { console.log('MEAN SUCCESS'); }

try {
    const meanFour = aUtils.mean([]);
    console.error('MEAN FAILED');
} catch (e) { console.log('MEAN SUCCESS'); }

try {
    const meanFive = aUtils.mean("1234");
    console.error('MEAN FAILED');
} catch (e) { console.log('MEAN SUCCESS'); }

try {
    const meanSix = aUtils.mean(["guitar", 1, 3, "apple"]);
    console.error('MEAN FAILED');
} catch (e) { console.log('MEAN SUCCESS'); }

try {
    const meanSeven = aUtils.mean();
    console.error('MEAN FAILED');
} catch (e) { console.log('MEAN SUCCESS'); }


console.log("--- medianSquared Test Cases:");
// -----------------medianSquared PASS: -----------------------
try {
    const medOne = aUtils.medianSquared([2, 3, 4]);
    console.log('medianSquared SUCCESS');
} catch (e) { console.error('medianSquared FAILED'); }
try {
    const medTwo = aUtils.medianSquared([4, 1, 2]);
    console.log('medianSquared SUCCESS');
} catch (e) { console.error('medianSquared FAILED'); }

// -----------------medianSquared FAIL: -----------------------
try {
    const medThree = aUtils.medianSquared([]);
    console.log('medianSquared FAILED');
} catch (e) { console.error('medianSquared SUCCESS'); }
try {
    const medFour = aUtils.medianSquared("banana");
    console.log('medianSquared FAILED');
} catch (e) { console.error('medianSquared SUCCESS'); }
try {
    const medFive = aUtils.medianSquared(1,2,3);
    console.log('medianSquared FAILED');
} catch (e) { console.error('medianSquared SUCCESS'); }
try {
    const medSix = aUtils.medianSquared(["guitar", 1, 3, "apple"]);
    console.log('medianSquared FAILED');
} catch (e) { console.error('medianSquared SUCCESS'); }
try {
    const medSeven = aUtils.medianSquared();
    console.log('medianSquared FAILED');
} catch (e) { console.error('medianSquared SUCCESS'); }



console.log("--- maxElement Test Cases:");
// -----------------maxElement PASS: -----------------------
try {
    const maxOne = aUtils.maxElement([4, 1, 2]);
    console.log('maxElement SUCCESS');
} catch (e) { console.error('maxElement FAILED'); }
// -----------------maxElement FAIL: -----------------------
try {
    const maxTwo = aUtils.maxElement([]);
    console.log('maxElement FAILED');
} catch (e) { console.error('maxElement SUCCESS'); }
try {
    const maxThree = aUtils.maxElement("banana");
    console.log('maxElement FAILED');
} catch (e) { console.error('maxElement SUCCESS'); }
try {
    const maxFour = aUtils.maxElement(1,2,3);
    console.log('maxElement FAILED');
} catch (e) { console.error('maxElement SUCCESS'); }
try {
    const maxFive = aUtils.maxElement(["guitar", 1, 3, "apple"]);
    console.log('maxElement FAILED');
} catch (e) { console.error('maxElement SUCCESS'); }
try {
    const maxSix = aUtils.maxElement();
    console.log('maxElement FAILED');
} catch (e) { console.error('maxElement SUCCESS'); }



console.log("--- fill Test Cases:");
// -----------------fill PASS: -----------------------
try {
    const fillOne = aUtils.fill(6);
    console.log('fill SUCCESS');
} catch (e) { console.error('fill FAILED'); }
try {
    const fillTwo = aUtils.fill(3, "Welcome");
    console.log('fill SUCCESS');
} catch (e) { console.error('fill FAILED'); }
// -----------------fill FAIL: -----------------------
try {
    const fillThree = aUtils.fill();
    console.log('fill FAILED');
} catch (e) { console.error('fill SUCCESS'); }
try {
    const fillFour = aUtils.fill("test");
    console.log('fill FAILED');
} catch (e) { console.error('fill SUCCESS'); }
try {
    const fillFive = aUtils.fill(0);
    console.log('fill FAILED');
} catch (e) { console.error('fill SUCCESS'); }
try {
    const fillSix = aUtils.fill(-4);
    console.log('fill FAILED');
} catch (e) { console.error('fill SUCCESS'); }

console.log("--- countRepeating Test Cases:");
// -----------------countRepeating PASS: -----------------------
try {
    const countrTwo = aUtils.countRepeating([7, '7', 13, true, true, true, "Hello","Hello", "hello"]);
    console.log('countRepeating SUCCESS');
} catch (e) { console.error('countRepeating FAILED'); }
try {
    const countrFour = aUtils.countRepeating([]);
    console.log('countRepeating SUCCESS');
} catch (e) { console.error('countRepeating FAILED'); }
// -----------------countRepeating FAIL: -----------------------
try {
    const countrTwo = aUtils.countRepeating("foobar");
    console.log('countRepeating FAILED');
} catch (e) { console.error('countRepeating SUCCESS'); }
try {
    const countrThree = aUtils.countRepeating();
    console.log('countRepeating FAILED');
} catch (e) { console.error('countRepeating SUCCESS'); }
try {
    const countrFive = aUtils.countRepeating({a: 1, b: 2, c: "Patrick"});
    console.log('countRepeating FAILED');
} catch (e) { console.error('countRepeating SUCCESS'); }



console.log("--- isEqual Test Cases:");
// -----------------isEqual PASS: -----------------------
try {
    const equalOne = aUtils.isEqual([1, 2, 3], [3, 1, 2]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([1, 2, 3], [4, 5, 6]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([1, 3, 2], [1, 2, 3, 4]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([1, 2], [1, 2, 3]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
try {
    const equalOne = aUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 11 ], [ 9, 7, 8 ]]);
    console.log('isEqual SUCCESS');
} catch (e) { console.error('isEqual FAILED'); }
// -----------------isEqual FAIL: -----------------------
try {
    const equalOne = aUtils.isEqual();
    console.log('isEqual FAILED');
} catch (e) { console.error('isEqual SUCCESS'); }
try {
    const equalOne = aUtils.isEqual({1:1,2:1,3:1});
    console.log('isEqual FAILED');
} catch (e) { console.error('isEqual SUCCESS'); }



console.log("--- camelCase Test Cases:");
// -----------------camelCase PASS: -----------------------
try {
    const camelOne = sUtils.camelCase('my function rocks');
    console.log('camelCase SUCCESS');
} catch (e) { console.error('camelCase FAILED'); }
try {
    const camelOne = sUtils.camelCase('FOO BAR'); 
    console.log('camelCase SUCCESS');
} catch (e) { console.error('camelCase FAILED'); }
try {
    const camelOne = sUtils.camelCase("How now brown cow");  
    console.log('camelCase SUCCESS');
} catch (e) { console.error('camelCase FAILED'); }
// -----------------camelCase FAIL: -----------------------
try {
    const camelOne = sUtils.camelCase();  
    console.log('camelCase FAILED');
} catch (e) { console.error('camelCase SUCCESS'); }
try {
    const camelOne = sUtils.camelCase('');  
    console.log('camelCase FAILED');
} catch (e) { console.error('camelCase SUCCESS'); }
try {
    const camelOne = sUtils.camelCase(123);  
    console.log('camelCase FAILED');
} catch (e) { console.error('camelCase SUCCESS'); }
try {
    const camelOne = sUtils.camelCase(["Hello", "World"]);  
    console.log('camelCase FAILED');
} catch (e) { console.error('camelCase SUCCESS'); }


console.log("--- replaceChar Test Cases:");
// -----------------replaceChar PASS: -----------------------
try {
    const replaceOne = sUtils.replaceChar("Daddy");  
    console.log('replaceChar SUCCESS');
} catch (e) { console.error('replaceChar FAILED'); }
try {
    const replaceOne = sUtils.replaceChar("Mommy");  
    console.log('replaceChar SUCCESS');
} catch (e) { console.error('replaceChar FAILED'); }
try {
    const replaceOne = sUtils.replaceChar("Hello, How are you? I hope you are well");  
    console.log('replaceChar SUCCESS');
} catch (e) { console.error('replaceChar FAILED'); }
try {
    const replaceOne = sUtils.replaceChar("babbbbbbbble");  
    console.log('replaceChar SUCCESS');
} catch (e) { console.error('replaceChar FAILED'); }
// -----------------replaceChar FAIL: -----------------------
try {
    const replaceOne = sUtils.replaceChar("");  
    console.log('replaceChar FAILED');
} catch (e) { console.error('replaceChar SUCCESS'); }
try {
    const replaceOne = sUtils.replaceChar(123);  
    console.log('replaceChar FAILED');
} catch (e) { console.error('replaceChar SUCCESS'); }



console.log("--- mashUp Test Cases:");
// -----------------mashUp PASS: -----------------------
try {
    const mashOne = sUtils.mashUp("Patrick", "Hill");  
    console.log('mashUp SUCCESS');
} catch (e) { console.error('mashUp FAILED'); }
try {
    const mashOne = sUtils.mashUp("hello", "world");  
    console.log('mashUp SUCCESS');
} catch (e) { console.error('mashUp FAILED'); }
// -----------------mashUp FAIL: -----------------------
try {
    const mashOne = sUtils.mashUp("Patrick", "");  
    console.log('mashUp FAILED');
} catch (e) { console.error('mashUp SUCCESS'); }
try {
    const mashOne = sUtils.mashUp();  
    console.log('mashUp FAILED');
} catch (e) { console.error('mashUp SUCCESS'); }
try {
    const mashOne = sUtils.mashUp("John");  
    console.log('mashUp FAILED');
} catch (e) { console.error('mashUp SUCCESS'); }
try {
    const mashOne = sUtils.mashUp("h", "Hello");  
    console.log('mashUp FAILED');
} catch (e) { console.error('mashUp SUCCESS'); }
try {
    const mashOne = sUtils.mashUp("h", "e");  
    console.log('mashUp FAILED');
} catch (e) { console.error('mashUp SUCCESS'); }



console.log("--- makeArrays Test Cases:");
// -----------------makeArrays PASS: -----------------------
try {
    const makeOne = oUtils.makeArrays([{ x: 2, y: 3}, { a: 70, x: 4, z: 5 }, { x: 0, y: 9, q: 10 }]);  
    console.log('makeArrays SUCCESS');
} catch (e) { console.error('makeArrays FAILED'); }
try {
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };

    const makeTwo = oUtils.makeArrays([second, third]); 
    console.log('makeArrays SUCCESS');
} catch (e) { console.error('makeArrays FAILED'); }
try {
    const makeThree = oUtils.makeArrays([{ x: 0, y: 9, q: 10 }, { x: 2, y: 3}, { a: 70, x: 4, z: 5 }]);
    console.log('makeArrays SUCCESS');
} catch (e) { console.error('makeArrays FAILED'); }
// -----------------makeArrays FAIL: -----------------------
try {
    const first = {};

    const makeThree = oUtils.makeArrays([first, first]);
    console.log('makeArrays FAILED');
} catch (e) { console.error('makeArrays SUCCESS'); }



console.log("--- isDeepEqual Test Cases:");
// -----------------isDeepEqual PASS: -----------------------
try {
    const deepTwo = oUtils.isDeepEqual({a: 2, b: 3}, {a: 2, b: 4}); // false
    console.log('isDeepEqual SUCESS');
} catch (e) { 
    console.error('isDeepEqual FAILED'); }
try {
    const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
    const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
    const deepOne = oUtils.isDeepEqual(forth, fifth); // true
    console.log('isDeepEqual SUCESS');
} catch (e) { console.error('isDeepEqual FAILED'); }
try {
    const third = {a: 2, b: 3};
    const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
    const makeThree = oUtils.isDeepEqual(forth, third);
    console.log('isDeepEqual SUCESS');
} catch (e) { console.error('isDeepEqual FAILED'); }
try {
    const first = {a: 2, b: 3};
    const second = {a: 2, b: 4};
    const third = {a: 2, b: 3};
    const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
    const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
    const makeThree = oUtils.isDeepEqual({}, {});
    console.log('isDeepEqual SUCCESS');
} catch (e) { console.error('isDeepEqual FAILED'); }

// -----------------isDeepEqual FAIL: -----------------------
try {
    const makeThree = oUtils.isDeepEqual([1,2,3], [1,2,3]);
    console.log('isDeepEqual FAILED');
} catch (e) { console.error('isDeepEqual SUCCESS'); }
try {
    const makeThree = oUtils.isDeepEqual("foo", "bar");
    console.log('isDeepEqual FAILED');
} catch (e) { console.error('isDeepEqual SUCCESS'); }




console.log("--- computeObject Test Cases:");
// -----------------computeObject PASS: -----------------------
try {
    const computerOne = oUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
    console.log('computeObject SUCCESS');
} catch (e) { console.error('computeObject FAILED'); }
// -----------------computeObject FAIL: -----------------------
try {
    const computerOne = oUtils.computeObject(n => n * 2);
    console.log('computeObject FAILED');
} catch (e) { console.error('computeObject SUCCESS'); }

