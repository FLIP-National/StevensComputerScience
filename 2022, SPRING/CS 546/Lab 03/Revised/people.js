const axios = require('axios').default;

async function getPeople() {
    const {data} = await axios.get("https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json");
    return data;
}

const getPersonById = async function getPersonById(id) {
    const people = await getPeople();
    if (id === undefined) {
        throw new Error("Parameter 'id' does not exist."); 
    }
    if (typeof(id) != "string") {
        throw new Error("Parameter 'id' is not a string."); 
    }
    if (id.replace(/\s/g, '') == '') { 
        throw new Error("Parameter 'id' is an empty string."); 
    } 
    
    var person;
    for (x of people) {
        if (id == x.id) { person = x; }
    }

    if (person === undefined) { 
        throw new Error("ID not found."); 
    }

    return person;
}

const sameEmail = async function sameEmail(emailDomain) {
    const people = await getPeople();
    if (emailDomain === undefined) {
        throw new Error("Parmeter 'emailDomain' does not exist");
    }
    if (typeof(emailDomain) != "string") {
        throw new Error("Parameter 'emailDomain' is not a string.");
    }
    if (emailDomain.replace(/\s/g, '') == '') { 
        throw new Error("Parameter 'emailDomain' is an empty string."); 
    } 
    if (!emailDomain.includes('.')) {
        throw new Error("Parameter 'emailDomain' is an invalid domain.");  
    }

    let extension = emailDomain.slice(emailDomain.lastIndexOf('.') + 1);
    if (extension.length < 2) {
        throw new Error("Parameter 'emailDomain' has an invalid extension.");
    }
    if (extension.match(/\d+/g) != null) {
        throw new Error("Parameter 'emailDomain' has an invalid extension due to numbers.");
    }

    let emailArray = [];
    let matchingArray = [];
    for (x of people) {
        emailArray = x.email.split('@');
        if (emailArray[1].toUpperCase() == emailDomain.toUpperCase()) {
            matchingArray.push(x);
        }
    }

    if (matchingArray.length < 2) {
        throw new Error("There are less than people who have the same email.");
    }

    return matchingArray;
}

const manipulateIp = async function manipulateIp() {
    const people = await getPeople();

    let ipArray = [];
    for (x of people) {
        ipArray.push(Number(x.ip_address.replace(/\./g, "").split('').sort().toString().replace(/\,/g, "")));
    }

    ipArray.sort(function(a,b){ return a - b; });

    let min = ipArray[0];
    let max = ipArray[ipArray.length - 1];
    let mean = ipArray.reduce((a, b) => a + b) / ipArray.length;

    const hi = new Object();
    const lo = new Object();

    for (x of people) {
        temp = Number(x.ip_address.replace(/\./g, "").split('').sort().toString().replace(/\,/g, ""));
        if (min == temp) { 
            lo.firstName = x.first_name;
            lo.lastName = x.last_name;
        }
        if (max == temp) { 
            hi.firstName = x.first_name;
            hi.lastName = x.last_name;
        }
    }

    const obj = new Object();
    obj.highest = hi;
    obj.lowest = lo;
    obj.average = Math.floor(mean);

    return obj;
}

const sameBirthday = async function sameBirthday(month, day) {
    const people = await getPeople();

    if (month === undefined || day === undefined) {
        throw new Error("Missing parameters.");
    }

    if (typeof(month) == "string") {
        month = Number(month); 
        if (!Number.isInteger(month)) {
            throw new Error("Invalid Month input.");
        }
    }

    if (typeof(day) == "string") {
        day = Number(day); 
        if (!Number.isInteger(day)) {
            throw new Error("Invalid Day input.");
        }
    }

    if (typeof(month) != "number" || typeof(day) != "number") {
        throw new Error("Invalid Input.")
    }

    if (month < 1 || month > 12) {
        throw new Error("Month input is out of bounds.");
    }

    let days31 = [1, 3, 5, 7, 8, 10, 12];
    let days30 = [4, 6, 9, 11];
    if (days31.includes(month) && (day < 1 || day > 31)) {
        throw new Error("Day input is out of bounds.");
    }
    if (days30.includes(month) && (day < 1 || day > 30)) {
        throw new Error("Day input is out of bounds.");
    }
    if (month == 2 && (day < 1 || day > 28)) {
        throw new Error("Day input is out of bounds.");
    }

    let birthdayArray = [];
    let allbdays = [];

    for (x of people) {
        birthdayArray = x.date_of_birth.split('/');
        if (birthdayArray[0] == month && birthdayArray[1] == day) {
            allbdays.push(x.first_name + " " + x.last_name);
        }
    }

    if (allbdays == []) {
        throw new Error("No people have that birthday.");
    }

    return allbdays;
}


async function main(){
    // TEST - getPersonById(id)
    // console.log(await getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10"));
    // console.log(await getPersonById(-1)); 
    // console.log(await getPersonById(1001));
    // console.log(await getPersonById());
    // console.log(await getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff'));

    // TEST - sameEmail(emailDomain)
    // console.log(await sameEmail("harvard.edu"));
    // console.log(await sameEmail("foobar"));
    // console.log(await sameEmail("foobar."));
    // console.log(await sameEmail("foobar.123"));
    // console.log(await sameEmail(".com"));
    // console.log(await sameEmail());
    // console.log(await sameEmail("google.com.hk"));

    // TEST - manipulateIp()
    // console.log(await manipulateIp());

    // TEST - sameBirthday(month, day)
    // console.log(await sameBirthday(9, 25));
    // console.log(await sameBirthday("09", "25"));
    // console.log(await sameBirthday(9, 31)); 
    // console.log(await sameBirthday(13, 25)); 
    // console.log(await sameBirthday(2, 29)); 
    // console.log(await sameBirthday("09", "31")); 
    // console.log(await sameBirthday("      ", "25")); 
    // console.log(await sameBirthday());

    // console.log("111.26.173.248".replace(/\./g, "").split('').sort().toString().replace(/\,/g, ""));
}

main();

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    getPersonById,
    sameEmail,
    manipulateIp,
    sameBirthday
};