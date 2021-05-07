// global variables:
var speed = 0;
var rpm = 0;
var longitude = 0;
var latitude = 0;
var etemp = 0;
var otemp = 0;
var clicked = false;

function check(form) {
    if(form.userid.value == "admin" && form.password.value == "password") {
        window.location.href ='main.html'
    } 
    else {
        alert("Invalid Username or Password.") 
    }
}

function getRandInput(){
    speed = Math.floor(Math.random() * 100);
    document.getElementById("Speed").innerHTML = speed;
    rpm = Math.floor(Math.random() * 1000);
    document.getElementById("RPM").innerHTML = rpm;
    longitude = Math.floor(Math.random() * 180);
    document.getElementById("Long").innerHTML = longitude;
    latitude = Math.floor(Math.random() * 90);
    document.getElementById("Lat").innerHTML = latitude;
    etemp = Math.floor(Math.random() * 190);
    document.getElementById("EngTemp").innerHTML = etemp;
    otemp = Math.floor(Math.random() * 100);
    document.getElementById("OutTemp").innerHTML = otemp;
    actualSpeed = Math.floor((2.89 * rpm / 1609) * 60);
    document.getElementById("RPMs").innerHTML = actualSpeed;

    throwWarnings();
    putInTable();
    gateCheck();
}

function putInTable(){
    let table = document.getElementById('Logs');
    let row = table.insertRow();

    var today = new Date();

    let dateCell = row.insertCell(0);
    dateCell.innerHTML = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

    let timeCell = row.insertCell(1);
    timeCell.innerHTML = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

    let speedCell = row.insertCell(2);
    speedCell.innerHTML = speed;

    let rpmCell = row.insertCell(3);
    rpmCell.innerHTML = rpm;

    let engTCell = row.insertCell(4);
    engTCell.innerHTML = etemp;

    let outTCell = row.insertCell(5);
    outTCell.innerHTML = otemp;

    let condCell = row.insertCell(6);
    condCell.innerHTML = "Admin";
}

function throwWarnings(){
    if(speed < 70){
        document.getElementById("speedWarning").innerHTML = "Speed Status: OK";
        document.getElementById("speedWarning").style.backgroundColor = "green";
        document.getElementById("speedWarning").style.color = "white";
        document.getElementById("speedWarning").style.padding = "10px 100px 10px 100px";
    }
    if(speed > 70){
        document.getElementById("speedWarning").innerHTML = "Speed Status: SLOW DOWN! Speed is approaching maximum speed.";
        document.getElementById("speedWarning").style.backgroundColor = "yellow";
        document.getElementById("speedWarning").style.color = "black";
        document.getElementById("speedWarning").style.padding = "10px 100px 10px 100px";
    }
    if(speed > 90){
        document.getElementById("speedWarning").innerHTML = "Speed Status: BRAKE! Speed is maximum! Slow Down!";
        document.getElementById("speedWarning").style.backgroundColor = "red";
        document.getElementById("speedWarning").style.color = "black";
        document.getElementById("speedWarning").style.padding = "10px 100px 10px 100px";
    }

    if(etemp < 150){
        document.getElementById("tempWarning").innerHTML = "Temperature Status: OK";
        document.getElementById("tempWarning").style.backgroundColor = "green";
        document.getElementById("tempWarning").style.color = "white";
        document.getElementById("tempWarning").style.padding = "10px 100px 10px 100px";
    }
    if(etemp > 150){
        document.getElementById("tempWarning").innerHTML = "Temperature Status: DANGER! Engine Temperature is approaching maximum.";
        document.getElementById("tempWarning").style.backgroundColor = "yellow";
        document.getElementById("tempWarning").style.color = "black";
        document.getElementById("tempWarning").style.padding = "10px 100px 10px 100px";
    }
    if(etemp > 180){
        document.getElementById("tempWarning").innerHTML = "Temperature Status: WARNING! Engine is overheating!";
        document.getElementById("tempWarning").style.backgroundColor = "red";
        document.getElementById("tempWarning").style.color = "black";
        document.getElementById("tempWarning").style.padding = "10px 100px 10px 100px";
    }
    if(rpm < 750){
        document.getElementById("rpmWarning").innerHTML = "Slippage Status: OK";
        document.getElementById("rpmWarning").style.backgroundColor = "green";
        document.getElementById("rpmWarning").style.color = "white";
        document.getElementById("rpmWarning").style.padding = "10px 100px 10px 100px";
    }
    if(rpm > 750){
        document.getElementById("rpmWarning").innerHTML = "Slippage Status: DANGER! RPM is approaching dangerous speeds.";
        document.getElementById("rpmWarning").style.backgroundColor = "yellow";
        document.getElementById("rpmWarning").style.color = "black";
        document.getElementById("rpmWarning").style.padding = "10px 100px 10px 100px";
    }
    if(rpm > 900){
        document.getElementById("rpmWarning").innerHTML = "Slippage Status: WARNING! RPM dangerously high! Slippage likely!";
        document.getElementById("rpmWarning").style.backgroundColor = "red";
        document.getElementById("rpmWarning").style.color = "black";
        document.getElementById("rpmWarning").style.padding = "10px 100px 10px 100px";
    }

    let isMoving = Math.floor(Math.random() * 2);
    let objectDist = Math.floor(Math.random() * 50);
    if(isMoving == 1) { // object IS moving
        if(objectDist <= 10) {
            document.getElementById("objectDetection").innerHTML = "Object Status: BRAKE! You're about to hit a moving object!";
            document.getElementById("objectDetection").style.backgroundColor = "red";
            document.getElementById("objectDetection").style.color = "black";
        }
        else if(objectDist <= 30) {
            document.getElementById("objectDetection").innerHTML = "Object Status: SLOW DOWN! There's a moving object close by!";
            document.getElementById("objectDetection").style.backgroundColor = "yellow";
            document.getElementById("objectDetection").style.color = "black";
        }
        else{
            document.getElementById("objectDetection").innerHTML = "Object Status: OK!";
            document.getElementById("objectDetection").style.backgroundColor = "green";
            document.getElementById("objectDetection").style.color = "white";
        }
    }
    else { // object is NOT moving
        if(objectDist <= 5) {
            document.getElementById("objectDetection").innerHTML = "Object Status: BRAKE! You're about to hit a standing object!";
            document.getElementById("objectDetection").style.backgroundColor = "red";
            document.getElementById("objectDetection").style.color = "black";
        }
        else if(objectDist <= 10) {
            document.getElementById("objectDetection").innerHTML = "Object Status: SLOW DOWN! There's a standing object close by!";
            document.getElementById("objectDetection").style.backgroundColor = "yellow";
            document.getElementById("objectDetection").style.color = "black";
        }
        else{
            document.getElementById("objectDetection").innerHTML = "Object Status: OK!";
            document.getElementById("objectDetection").style.backgroundColor = "green";
            document.getElementById("objectDetection").style.color = "white";
        }
    }
}

function downloadData(){
    var table = document.getElementById("Logs");
    var rows =[];
 
    for(var i=0,row; row = table.rows[i];i++){
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        column4 = row.cells[3].innerText;
        column5 = row.cells[4].innerText;
        column6 = row.cells[5].innerText;
        column7 = row.cells[6].innerText;

        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5,
                column6,
                column7
            ]
        );
 
        }
        csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "HTR_Logs.csv");
        document.body.appendChild(link);
        link.click();
}

function gateCheck() {
    let distance = Math.floor(Math.random() * 10);
    const audio = new Audio("train_horn.mp3");
    if(distance == 1){ // At Gate
        audio.play();
        let gateStatus = Math.floor(Math.random() * 2);
        if(gateStatus == 1){ // open
            document.getElementById("gateStat").innerHTML = "Gate Status: GATE IS OPEN. :)";
            document.getElementById("gateStat").style.backgroundColor = "green";
            document.getElementById("gateStat").style.color = "white";
        }
        else { // close
            document.getElementById("gateStat").innerHTML = "Gate Status: GATE IS CLOSED. :(";
            document.getElementById("gateStat").style.backgroundColor = "red";
            document.getElementById("gateStat").style.color = "black";
        }
    }
    else if(distance == 10) { // A mile away from a gate
        document.getElementById("gateStat").innerHTML = "Gate Status: HONK! APPROACHING GATE IN 1 MILE.";
        document.getElementById("gateStat").style.backgroundColor = "green";
        document.getElementById("gateStat").style.color = "white";
    }
    else {
        document.getElementById("gateStat").innerHTML = "Gate Status: No Gate detected.";
        document.getElementById("gateStat").style.backgroundColor = "green";
        document.getElementById("gateStat").style.color = "white";
    }
    
}