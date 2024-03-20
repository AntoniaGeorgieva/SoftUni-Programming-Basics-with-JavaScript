function solve(input) {
    let recordInSeconds = Number(input[0]);
    let metres = Number(input[1]);
    let secondsFor1M = Number(input[2]);
    let secondsIvan = metres * secondsFor1M;

    let a = Math.floor(metres / 15);
    let b = a * 12.5

    secondsIvan = secondsIvan + b;

    if (secondsIvan < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${secondsIvan.toFixed(2)} seconds.`)
    }
    else {
        let c = secondsIvan - recordInSeconds
        console.log(`No, he failed! He was ${c.toFixed(2)} seconds slower.`)
    }
}