function solve(input) {
    let filmName = input[0];
    let episod = Number(input[1]);
    let rest = Number(input[2]);

    let food = 0.125 * rest;
    let otdih = 0.25 * rest;
    let timeForFilm = rest - food - otdih;

    if (episod <= timeForFilm) {
        let a = Math.ceil(timeForFilm - episod);
        console.log(`You have enough time to watch ${filmName} and left with ${a} minutes free time.`)
    }
    else {
        let a = Math.ceil(episod - timeForFilm)
        console.log(`You don't have enough time to watch ${filmName}, you need ${a} more minutes.`)
    }
}