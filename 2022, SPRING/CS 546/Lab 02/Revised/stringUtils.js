const camelCase = function camelCase(string) {
    if(string === undefined) {
        throw new Error("Existential Error: String does not exist");
    }   
    else if (typeof(string) != "string") {
        throw new Error("Type Error: Parameter not a string.");
    }
    else if (string.length == 0){
        throw new Error("Length Error: String is empty.");
    }
    else if (string.replace(/\s/g, '') == '') {
        throw new Error("Length Error: String is full of spaces.");
    }
    else {
        const splitStrings = string.split(' ');
        // console.log(splitStrings);
        
        var camelString = '';
        for(i in splitStrings) {
            if(i != 0) {
                var word = splitStrings[i].charAt(0).toUpperCase() + splitStrings[i].slice(1).toLowerCase();
            }
            else {
                var word = splitStrings[i].toLowerCase();
            }
            camelString = camelString.concat('', word);
        }

        return camelString;
    }
}

// console.log(camelCase('my function rocks'));        // Returns: "myFunctionRocks"
// console.log(camelCase('FOO BAR'));                  // Returns: "fooBar"
// console.log(camelCase("How now brown cow"));        // Returns: "howNowBrownCow"
// console.log(camelCase());                       // Throws Error
// console.log(camelCase('         '));                     // Throws Error
// console.log(console.log(camelCase(123)));       // Throws Error
// console.log(camelCase(["Hello", "World"]));     // Throws Error

const replaceChar = function replaceChar(string) {
    if(string === undefined) {
        throw new Error("Existential Error: String does not exist");
    }   
    else if (typeof(string) != "string") {
        throw new Error("Type Error: Parameter not a string.");
    }
    else if (string.length == 0){
        throw new Error("Length Error: String is empty.");
    }
    else if (string.replace(/\s/g, '') == '') {
        throw new Error("Length Error: String is full of spaces.");
    }
    else {
        var newWord = '' + string.charAt(0);
        var x = ["*", "$"];
        let f = string.charAt(0).toLowerCase();
        var count = 0;

        for(var i = 1; i < string.length; i++) {
            
            if(f == string.charAt(i).toLowerCase()) {
                if(count%2 == 0) {
                    newWord = newWord + x[0];
                }
                else {
                    newWord = newWord + x[1];
                }
                count++;
                // console.log(newWord);
            }
            else {
                newWord = newWord + string.charAt(i);
                // console.log(newWord);
            }
        }

        return newWord;
    }
}

// console.log(replaceChar("Daddy"));
// console.log(replaceChar("Mommy"));
// console.log(replaceChar("Hello, How are you? I hope you are well"));
// console.log(replaceChar("babbbbble"));
// console.log(replaceChar(""));
// console.log(replaceChar(123));

const mashUp = function mashUp(string1, string2) {
    if(string1 === undefined || string2 === undefined) {
        throw new Error("Existential Error: String does not exist");
    }
    else if (typeof(string1) != "string" || typeof(string2) != "string") {
        throw new Error("Type Error: Input invalid!");
    }
    else if (string1.length < 2 || string2.length < 2) {
        throw new Error("Length Error: Strings must be greater than 2.");
    }
    else if (string1.replace(/\s/g, '').length < 2 || string2.replace(/\s/g, '').length < 2) {
        throw new Error("Length Error: String is full of spaces. >:(");
    }
    else {
        var s1 = string1.slice(0, 2) + string2.slice(2);
        var s2 = string2.slice(0, 2) + string1.slice(2);
        var s3 = s2 + " " + s1;

        return s3;
    }
}

// console.log(mashUp("Patrick", "Hill"));
// console.log(mashUp("hello", "world"));
// console.log(mashUp("Patrick", ""));
// console.log(mashUp());
// console.log(mashUp("John"));
// console.log(mashUp ("h", "Hello"));  // Throws Error
// console.log(mashUp ("h","e"));       // Throws Error


module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    camelCase,
    replaceChar,
    mashUp
};