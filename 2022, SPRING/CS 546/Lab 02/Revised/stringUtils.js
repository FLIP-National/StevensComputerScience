/*
    Helper Function takes in an String Parameter.
    Checks if the string is a valid string.
    Returns a boolean.
*/
const validString = function validString(string) {
    // -- Error Checking --
    if(!string) throw ": Missing parameter 'string'.";
    if(typeof(string) != "string") throw ": Incorrect type, expecting string.";
    if(string.replace(/\s/g, '').length == 0) throw ": Input Invalid, string is empty.";

    return true;
}

/*
    Function camelCase takes in an String Parameter.
    Returns a camelCase version of the string.
*/
const camelCase = function camelCase(string) {
    // -- Error Checking --
    if(!string) throw ": Missing parameter 'string'";
    if(!validString(string)) throw ": Invalid String.";
    
    // -- Camel Casing --
    let camelString = string.split(' ').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1).toLowerCase(), '');

    return camelString.charAt(0).toLowerCase() + camelString.slice(1);
}

/*
    Function replaceChar takes in an String Parameter.
    Replace any characters in the string that are the same as the starting character.
    Replace with alternating '*' and '$' characters.
    Returns a string with replacements.
*/
const replaceChar = function replaceChar(string) {
    // -- Error Checking --
    if(!string) throw ": Missing parameter 'string'";
    if(!validString(string)) throw ": Invalid String.";
    
    // -- Initializing Variables --
    let newWord = '', count = 0;

    // -- Interating and Replacing Characters --
    for(x of string.slice(1)) {
        if(string[0].toLowerCase() == x.toLowerCase()) {
            count%2 == 0 ? newWord += '*' : newWord += '$';
            count++;
            continue;
        }
        newWord += x;
    }

    return string[0] + newWord;
}

/*
    Function mashUp takes in two String Parameters.
    Returns the concatenation of the two strings, separated by a space and 
    swapping the first 2 characters of each.
*/
const mashUp = function mashUp(string1, string2) {
    // -- Error Checking --
    if(!string1) throw ": Missing Parameter 'string1'";
    if(!string2) throw ": Missing Parameter 'string2'";
    if(!validString(string1)) throw ": Invalid String.";
    if(!validString(string2)) throw ": Invalid String.";
    if(string1.length < 2) throw ": Invalid Input, Length must be at least 2 characters."
    if(string2.length < 2) throw ": Invalid Input, Length must be at least 2 characters."
    
    // -- Slicing and Concatenating --
    let s1 = string1.slice(0, 2) + string2.slice(2);
    let s2 = string2.slice(0, 2) + string1.slice(2);

    return s2 + " " + s1;
}

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    camelCase,
    replaceChar,
    mashUp
};