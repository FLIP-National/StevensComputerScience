const axios = require('axios').default;

async function getStocks() {
    const {data} = await axios.get("https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json");
    return data;
}

async function getPeople() {
    const {data} = await axios.get("https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json");
    return data;
}

const listShareholders = async function listShareholders(stockName) {
    const stocks = await getStocks();
    const people = await getPeople();

    if (stockName === undefined) {
        throw new Error("Missing parameter.");
    }
    if (typeof(stockName) != "string"){
        throw new Error("Invalid input.");
    }
    if (stockName.replace(/\s/g, '') == '') { 
        throw new Error("Parameter 'stockName' is an empty string."); 
    } 
    
    var found;
    for (x of stocks) {
        if(x.stock_name == stockName) { found = x; }
    }

    if (found == undefined) {
        throw new Error("Stock name cannot be found in stocks.json.");
    }

    let sholders = found.shareholders;
    let temp = new Object();
    let shareholdersArray = [];

    for (x of sholders) {
        for (y of people) {
            if (x.userId == y.id) {

                temp = {
                    first_name:  y.first_name,
                    last_name: y.last_name,
                    number_of_shares: x.number_of_shares
                };

                shareholdersArray.push(temp);
            }
        }
    }

    let shareHolderList = {
        id: found.id,
        stock_name: stockName,
        shareholders: shareholdersArray
    };

    return shareHolderList;
}

const totalShares = async function totalShares(stockName) {
    const stocks = await getStocks();

    if (stockName === undefined) {
        throw new Error("Missing parameter.");
    }
    if (typeof(stockName) != "string"){
        throw new Error("Invalid input.");
    }
    if (stockName.replace(/\s/g, '') == '') { 
        throw new Error("Parameter 'stockName' is an empty string."); 
    }
    var found;
    for (x of stocks) {
        if(x.stock_name == stockName) { found = x; }
    }

    if (found == undefined) {
        throw new Error("Stock name cannot be found in stocks.json.");
    }
    
    let s = found.shareholders;
    if (s.length == 0) {
        return "" + stockName + " currently has no shareholders."
    }

    let sumShares = 0;
    for (users of s) {
        sumShares += users.number_of_shares;
    }

    let finalString = stockName + ", has ";
    if (s.length == 1) {
        finalString += "1 shareholder that owns a total of ";
    }
    else {
        finalString += s.length + " shareholders that own a total of ";
    }
    if (sumShares == 1) {
        return finalString += "1 share.";
    }

    return finalString += sumShares + " shares.";
}

const listStocks = async function listStocks(firstName, lastName) {
    const stocks = await getStocks();
    const people = await getPeople();

    if (firstName === undefined || lastName === undefined) {
        throw new Error("Missing parameter.");
    }
    if (typeof(firstName) != "string" || typeof(lastName) != "string") {
        throw new Error("Invalid parameter input.")
    }
    if (firstName.replace(/\s/g, '') == '' || lastName.replace(/\s/g, '') == '') { 
        throw new Error("Parameters are empty strings."); 
    }

    var found;
    for (x of people) {
        if(x.first_name == firstName && x.last_name == lastName) { 
            found = x; 
        }
    }

    if (found == undefined) {
        throw new Error("Person specified does not exist in people.json.");
    }

    let personID = found.id;
    let temp = new Object();
    let personStockArray = [];

    for (s of stocks) {
        for (holders of s.shareholders) {
            if (personID == holders.userId) {
                temp = {
                    stock_name: s.stock_name,
                    number_of_shares: holders.number_of_shares
                };
                personStockArray.push(temp);
            }
        }
    }

    return personStockArray;
}

const getStockById = async function getStockById(id) {
    const stocks = await getStocks();
    if (id === undefined) {
        throw new Error("Parameter 'id' does not exist."); 
    }
    if (typeof(id) != "string") {
        throw new Error("Parameter 'id' is not a string."); 
    }
    if (id.replace(/\s/g, '') == '') { 
        throw new Error("Parameter 'id' is an empty string."); 
    } 
    
    var stock;
    for (x of stocks) {
        if (id == x.id) { stock = x; }
    }

    if (stock === undefined) { 
        throw new Error("ID not found."); 
    }

    return stock;
}

async function main() {
    // TEST - listShareholders(stockName)
    // console.log(await listShareholders("Aeglea BioTherapeutics, Inc."));
    // console.log(await listShareholders("Powell Industries, Inc."));
    // console.log(await listShareholders('foobar'));
    // console.log(await listShareholders());

    // TEST - totalShares(stockName)
    // console.log(await totalShares('Aeglea BioTherapeutics, Inc.'));
    // console.log(await totalShares('Nuveen Preferred and Income 2022 Term Fund'));
    // console.log(await totalShares('Aeglea BioTherapeutics, Inc.'));
    // console.log(await totalShares('Powell Industries, Inc.'));
    // console.log(await totalShares(43));
    // console.log(await totalShares(' '));
    // console.log(await totalShares('Foobar Inc'));
    // console.log(await totalShares());

    // TEST - listStocks(firstName, lastName)
    // console.log(await listStocks("Grenville", "Pawelke" ));
    // console.log(await listStocks('Patrick', "Hill"));
    // console.log(await listStocks());
    // console.log(await listStocks("foo"));
    // console.log(await listStocks("      ", "        "));
    // console.log(await listStocks(1,2));

    // TEST - getStockById(id)
    // console.log(await getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0"));
    // console.log(await getStockById(-1));
    // console.get(await getStockById(1001));
    // console.log(await getStockById());
    // console.log(await getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff'));
}


main();

module.exports = {
    firstName: "CINDY", 
    lastName: "ZHANG", 
    studentId: "10445391",
    listShareholders,
    totalShares,
    listStocks,
    getStockById
};