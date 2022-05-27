/*
    Function questionOne takes in an Array Parameter.
    Returns the sum of the squares of all the number in the array.
*/
const questionOne = function questionOne(arr) {
    return arr.reduce((a, b) => a + (b*b), 0);
}

/*
    Function questionTwo takes in a Number Parameter.
    This parameter represents the index.
    Returns the fibonacci that corresponds to index given.
*/
const questionTwo = function questionTwo(num) { 
    return num < 1 ? 0 : num <= 2 ? 1 : questionTwo(num - 1) + questionTwo(num - 2);
}

/*
    Function questionThree takes in a String Parameter.
    Returns the number of vowels contained in the String.
    Note: We're not counting y as a vowel.
*/
const questionThree = function questionThree(text) {
    return text.length - text.replace(/[aeiou]/g,"").length;
}

/*
    Function questionFour takes in a Number Parameter.
    Returns the factorial of that Number.
*/
const questionFour = function questionFour(num) {
    return num < 0 || num%1 ? NaN : num == 0 ? 1: questionFour(num - 1) * num;
}

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
