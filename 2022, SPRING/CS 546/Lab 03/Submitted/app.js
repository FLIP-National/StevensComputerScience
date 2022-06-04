const people = require("./people");
const stocks = require("./stocks");

async function main() {
    const P = "Passed";
    const F = "Failed";

    console.log("------------ TESTING: getPersonById(id) ------------");
    try{
        const testOne = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10");
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const testTwo = await people.getPersonById(-1)
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testThree = await people.getPersonById(1001); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testFour = await people.getPersonById();
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testFive = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: sameEmail() ------------");
    try{
        const testSix = await people.sameEmail("harvard.edu"); 
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const testSeven = await people.sameEmail("foobar");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testEight = await people.sameEmail("foobar.");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testNine = await people.sameEmail("foobar.123");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testTen = await people.sameEmail(".com");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testEleven = await people.sameEmail(); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const testTwelve = await people.sameEmail("google.com.hk");
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: manipulateIp() ------------");
    try{
        const peopledata = await people.manipulateIp(); 
        console.log (P);
    } catch(e) {
        console.log (F);
    }

    console.log("------------ TESTING: sameBirthday(month, day) ------------");
    try{
        const peopledata = await people.sameBirthday(9, 25);
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await people.sameBirthday("09", "25");
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await people.sameBirthday(9, 31);
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await people.sameBirthday(13, 25); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await people.sameBirthday(2, 29); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await people.sameBirthday("09", "31");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await people.sameBirthday("      ", "25");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await people.sameBirthday();
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: listShareholders(stockName) ------------");
    try{
        const peopledata = await stocks.listShareholders("Aeglea BioTherapeutics, Inc.");
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.listShareholders("Powell Industries, Inc.");
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.listShareholders('foobar');
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.listShareholders();
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: totalShares() ------------");
    try{
        const peopledata = await stocks.totalShares('Aeglea BioTherapeutics, Inc.');
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.totalShares('Nuveen Preferred and Income 2022 Term Fund'); 
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.totalShares('Aeglea BioTherapeutics, Inc.'); 
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.totalShares('Powell Industries, Inc.');
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.totalShares(43);
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.totalShares(' ');
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.totalShares('Foobar Inc');
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.totalShares();
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: listStocks() ------------");
    try{
        const peopledata = await stocks.listStocks("Grenville", "Pawelke" ); 
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.listStocks('Patrick', "Hill"); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.listStocks();
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.listStocks("foo");
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.listStocks("      ", "        "); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.listStocks(1,2);
        console.log (F);
    } catch(e) {
        console.log (P);
    }

    console.log("------------ TESTING: getStockById() ------------");
    try{
        const peopledata = await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0");
        console.log (P);
    } catch(e) {
        console.log (F);
    }
    try{
        const peopledata = await stocks.getStockById(-1);
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.getStockById(1001); 
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.getStockById();
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (F);
    } catch(e) {
        console.log (P);
    }
    try{
        const peopledata = await stocks.
        console.log (F);
    } catch(e) {
        console.log (P);
    }
}


main();