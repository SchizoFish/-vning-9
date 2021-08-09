function bishBosh() {

    let valToLoop = 100;
    let bishNum = 3;
    let boshNum = 4;
    
    for (let i = 1; i <= valToLoop; i++) {

        if (i % bishNum == 0) {
            console.log("Bish, ");
        } else if (i % boshNum == 0) {
            console.log("Bosh, ");
        } else if (i % bishNum == 0 && i % boshNum == 0) {
            console.log("Bish-bosh" + ", ");
        } else {
            console.log(`${i}, `)
        }

    }
}

bishBosh();