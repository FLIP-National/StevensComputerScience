const people = require("./people");
const stocks = require("./stocks");

async function main(){
    let ans1 = {
        id: "7989fa5e-8f3f-458d-ad58-23c8d9ef5a10",
        first_name: "Val",
        last_name: "Kinsell",
        email: "vkinsell4@icq.com",
        ip_address: "169.162.241.22",
        ssn: "578-08-2277",
        date_of_birth: "11/30/1979",
        address: {
            home: {
                street_number: "0",
                street_name: "Schiller",
                street_suffix: "Junction",
                city: "Houston",
                state: "TX",
                zip: "77090"
            },
            work: {
                street_number: "21",
                street_name: "Dryden",
                street_suffix: "Trail",
                city: "New York City",
                state: "NY",
                zip: "10034"
            }
        }
    }
    let ans2 = [
        {
            id: '9573b4d0-1666-4bff-ac03-6f0b7b5b99ca',
            first_name: 'Ardenia',
            last_name: 'Seid',
            email: 'aseid1@harvard.edu',
            ip_address: '39.122.18.68',
            ssn: '116-84-0804',
            date_of_birth: '10/24/1946',
            address: { home: [Object], work: [Object] }
        },
        {
            id: 'b25be6d3-036d-4b18-9fda-6afac4623603',
            first_name: 'Tracee',
            last_name: 'Farmiloe',
            email: 'tfarmiloe15@harvard.edu',
            ip_address: '110.44.186.56',
            ssn: '830-02-0272',
            date_of_birth: '07/25/1981',
            address: { home: [Object], work: [Object] }
        },
        {
            id: '1380f2af-e0d8-4231-a9e7-f09650afc0bb',
            first_name: 'Vonnie',
            last_name: 'Skoate',
            email: 'vskoatend@harvard.edu',
            ip_address: '136.44.63.233',
            ssn: '752-11-3294',
            date_of_birth: '09/30/1999',
            address: { home: [Object], work: [Object] }
        },
        {
            id: '3c9e028d-c739-4c70-b81a-cfcf8c094cb0',
            first_name: 'Arlin',
            last_name: 'Awdry',
            email: 'aawdryql@harvard.edu',
            ip_address: '220.107.136.220',
            ssn: '291-66-6045',
            date_of_birth: '06/30/1985',
            address: { home: [Object], work: [Object] }
        }
    ]
    let ans3 = {
        highest: { firstName: 'Karalee', lastName: 'Fontes' },
        lowest: { firstName: 'Willdon', lastName: 'Furnell' },
        average: 7457119356
    }
    let ans4 = ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge'];
    let ans5 = ['Khalil Ovitts',  'Erny Van Merwe', 'Emanuel Saben', 'Iorgos Tembridge'];
    let ans6 = {
        id: '7283e5d6-7481-41cb-83b3-5a4a2da34717',
        stock_name: 'Aeglea BioTherapeutics, Inc.',
        shareholders: [
           { first_name: "Paolo", last_name: "Victoria", number_of_shares: 55 },
           { first_name: "Caresse",last_name: "Clissett", number_of_shares: 449 },
           { first_name: "Benedikta",last_name: "Meller", number_of_shares: 120 },
           { first_name: "Kristy",last_name: "Goady", number_of_shares: 14 },
           { first_name: "Balduin",last_name: "Blackmuir", number_of_shares: 25 }
        ]
    }
    let ans7 = {
        "id": "929686a2-dd3a-42c7-a88d-b170e2590252",
        "stock_name": "Powell Industries, Inc.",
        "shareholders": []
    }
    let ans8 = [
        {stock_name: "PAREXEL International Corporation", number_of_shares: 443},
        {stock_name: "Vanguard Russell 2000 ETF", number_of_shares: 59},
        {stock_name: "National CineMedia, Inc.", number_of_shares: 320},
        {stock_name: "CombiMatrix Corporation", number_of_shares: 434}      
    ]
    let ans9 = {
        id: 'f652f797-7ca0-4382-befb-2ab8be914ff0',
        stock_name: 'Transcat, Inc.',
        shareholders: [
            {userId: '55ce26c4-915c-4a99-afe9-544e57227fcd',number_of_shares: 155},
            {userId: 'b9245e24-0ac7-49fc-a487-af4b7142a7e4',number_of_shares: 307},
            {userId: 'ed0ec3bf-3ec4-4025-8b26-ebd17487cb22',number_of_shares: 44},
            {userId: '56b285ff-ff97-417b-a9c7-d423b13c25a6',number_of_shares: 396},
            {userId: 'bf8b066a-3f06-4987-9e61-0388f6374a4d',number_of_shares: 335},
            {userId: '9369a0eb-9d4c-434a-901b-b29a92da91ed',number_of_shares: 399},
            {userId: '74fd73cb-1ca9-443d-9c8a-b263fe4e0ce3',number_of_shares: 139}
        ]
    }

    console.log("------------ TESTING: getPersonById(id) ------------");
    console.log("-- EXPECTED:");
    console.log(ans1);
    console.log("-- RECEIVED:")
    console.log(await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10"));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans1 == (await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10")));

    console.log("------------ TESTING: sameEmail() ------------");
    console.log("-- EXPECTED:");
    console.log(ans2);
    console.log("-- RECEIVED:")
    console.log(await people.sameEmail("harvard.edu"));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans2 == (await people.sameEmail("harvard.edu")));

    console.log("------------ TESTING: manipulateIp() ------------");
    console.log("-- EXPECTED:");
    console.log(ans3);
    console.log("-- RECEIVED:")
    console.log(await people.manipulateIp());
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans3 == (await people.manipulateIp()));

    console.log("------------ TESTING1: sameBirthday(month, day) ------------");
    console.log("-- EXPECTED:");
    console.log(ans4);
    console.log("-- RECEIVED:")
    console.log(await people.sameBirthday(9, 25));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans4 == (await people.sameBirthday(9, 25)));

    console.log("------------ TESTING2: sameBirthday(month, day) ------------");
    console.log("-- EXPECTED:");
    console.log(ans5);
    console.log("-- RECEIVED:")
    console.log(await people.sameBirthday("09", "25"));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans5 == (await people.sameBirthday("09", "25")));

    console.log("------------ TESTING1: listShareholders(stockName) ------------");
    console.log("-- EXPECTED:");
    console.log(ans6);
    console.log("-- RECEIVED:")
    console.log(await stocks.listShareholders("Aeglea BioTherapeutics, Inc."));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans6 == (await stocks.listShareholders("Aeglea BioTherapeutics, Inc.")));

    console.log("------------ TESTING2: listShareholders(stockName) ------------");
    console.log("-- EXPECTED:");
    console.log(ans7);
    console.log("-- RECEIVED:")
    console.log(await stocks.listShareholders("Powell Industries, Inc."));
    console.log("-- IS RECEIVED RIGHT?");
    console.log(ans7 == (await stocks.listShareholders("Powell Industries, Inc.")));

    console.log("------------ TESTING1: totalShares() ------------");
    console.log("-- EXPECTED:");
    console.log("Aeglea BioTherapeutics, Inc., has 5 shareholders that own a total of 663 shares.");
    console.log("-- RECEIVED:")
    console.log(await stocks.totalShares('Aeglea BioTherapeutics, Inc.'));

    console.log("------------ TESTING2: totalShares() ------------");
    console.log("-- EXPECTED:");
    console.log("Nuveen Preferred and Income 2022 Term Fund, has 1 shareholder that owns a total of 285 shares.");
    console.log("-- RECEIVED:")
    console.log(await stocks.totalShares('Nuveen Preferred and Income 2022 Term Fund'));

    console.log("------------ TESTING3: totalShares() ------------");
    console.log("-- EXPECTED:");
    console.log("Powell Industries, Inc. currently has no shareholders.");
    console.log("-- RECEIVED:")
    console.log(await stocks.totalShares('Powell Industries, Inc.'));

    console.log("------------ TESTING: listStocks() ------------");
    console.log("-- EXPECTED:");
    console.log(ans8);
    console.log("-- RECEIVED:")
    console.log(await stocks.listStocks("Grenville", "Pawelke" ));

    console.log("------------ TESTING: getStockById() ------------");
    console.log("-- EXPECTED:");
    console.log(ans9);
    console.log("-- RECEIVED:")
    console.log(await stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0"));
}

main();