/*function bishBosh() {

    let valToLoop = 100;
    let bishNum = 3;
    let boshNum = 4;
    
    for (let i = 1; i <= valToLoop; i++) {

        if (i % bishNum == 0) {
            console.log("Bish, ");
        } else if (i % boshNum == 0) {
            console.log("Bosh, ");
        else if (i % bishNum == 0 && i % boshNum == 0) {
            console.log("Bish-bosh" + ", ");
        } else {
            console.log(`${i}, `)
        }

    }
}*/

function bishBosh() {

    let input = document.getElementById("inputForm");
    let valToLoop = input.elements[0].value;
    let bishNum = input.elements[1].value;
    let boshNum = input.elements[2].value;
    let result="";
    
    for (let i = 1; i <= valToLoop; i++) {

        if (i % bishNum == 0) {
            result +="Bish" + ", ";
        } else if (i % boshNum == 0) {
            result +="Bosh" + ", ";
        } else if (i % bishNum == 0 && i % boshNum == 0) {
            result += "Bish-Bosh" + ", ";
        } else {
            result+=i + ", ";
        }

    }
    document.getElementById("result").innerHTML = result;


}