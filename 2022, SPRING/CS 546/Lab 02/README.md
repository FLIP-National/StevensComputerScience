<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#lab_details">Lab Details</a>
      <ul>
        <li><a href="#prompt">Prompt</a></li>
        <li><a href="#requirements">Requirements</a></li>
      </ul>
    </li>
    <li>
      <a href="#results">Results</a>
      <ul>
        <li><a href="#grade">Grade</a></li>
        <li><a href="#comments">Comments</a></li>
        <li><a href="#comments">Problem Resolution Explaination</a></li>
      </ul>
    </li>
  </ol>
</details>

# Prompt
## Overall
The purpose of this lab is to familiarize yourself with Node.js modules and further your understanding of JavaScript syntax.

## Specifically
- [ ] make five files: 
    - [ ] arrayUtils.js 
    - [ ] objUtils.js 
    - [ ] stringUtils.js 
    - [ ] index.js 
    - [ ] package.js 
- [ ] Edit arrayUtils.js
    - [ ] Add mean(array)
    - [ ] Add medianSquared(array)
    - [ ] Add maxElement(array)
    - [ ] Add fill(end, value)
    - [ ] Add ountRepeating(array)
    - [ ] Add isEqual(arrayOne, arrayTwo)
- [ ] Edit objUtils.js 
    - [ ] Add makeArrays([objects])
    - [ ] Add isDeepEqual(obj1, obj2)
    - [ ] Add computeObject(object, func)
- [ ] Edit stringUtils.js 
    - [ ] Add camelCase(string)
    - [ ] Add replaceChar(string)
    - [ ] Add mashUp(string1, string2)
- [ ] Edit index.js 
    - [ ] Create one passing test case for each function 
    - [ ] Create one failing test case for each function
- [ ] Initialize a Node.js package.js 
    - [ ] Type `npm init`
    - [ ] Entry file : 'index.js'

# Requirements
1. Write each function in the specified file and export the function so that it may be used in other files.
2. Ensure to properly error check for different cases such as arguments existing and of the proper type as well as throw if anything is out of bounds such as invalid array index.
3. Import ALL exported module functions and write 2 test cases for each in `index.js`.
4. Submit all files (including `package.json`) in a zip with your name in the following format: `LastName_FirstName.zip`.
5. **You are not allowed to use any npm dependencies for this lab**.

## Grade
100%

## Comments
-4; maxElement fails with valid parameters Test Case: maxElement([5,6,9,2]) Expected: {"9":2} Your Output: {"9":3} -4; isDeepEqual failed with valid parameters Test Case: isDeepEqual({ a: { aa: 1, bb: 2 }, b: 2 }, { b: 2, a: { aa: 1 } }) Expected: false Your Output: true Great job!
-- Jackson Perry, Feb 3 at 7:01pm

+10 bonus added to lowest lab grade (8 points added to this lab)
-- Patrick Hill, Mar 28 at 10:43pm

## Problem Resolution Explaination
1. Function `maxElement` returns the incorrect index because this does not make a copy of array:
    ```let arrayDupe = array;```
   Instead I changed it to:
    ```let arrayDupe = array.slice();```
2. Function `isDeepEqual` returns the incorrect boolean because it did not properly check. To fix this problem:
    - [x] Checked if the two Objects were equal length.
    - [x] Interated through the First Object to compare to Second Object.
    - [x] Checked if Second Object's key/value did not exist (return false if it did not)
 