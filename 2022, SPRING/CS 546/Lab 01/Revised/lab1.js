const questionOne = function questionOne(arr) {
    return arr.reduce((a, b) => a*a + b*b)
}

const questionTwo = function questionTwo(num) { 
    var x = 1, y = 0, tmp;
    while (num-1 >= 0) {
        temp = x; 
        x = x + y; 
        y = temp;
        num--;
    }

    return y;
}

const questionThree = function questionThree(text) {
    var a = text.replaceAll("a","").length;
    var e = text.replaceAll("e","").length;
    var i = text.replaceAll("i","").length;
    var o = text.replaceAll("o","").length;
    var u = text.replaceAll("u","").length;
    return (5 * text.length) - a - e - i - o - u;
}

const questionFour = function questionFour(num) {
    var factNum = 1;

    if(num < 0) return NaN;
    
    while (num > 0) {
        factNum *= num;
        num--;
    }

    return factNum;
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