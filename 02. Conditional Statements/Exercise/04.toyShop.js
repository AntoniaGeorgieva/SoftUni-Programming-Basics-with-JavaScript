function solve(input) {
    let price = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minuons = Number(input[4]);
    let trains = Number(input[5]);
    let toys = puzzles + dolls + bears + minuons + trains;

    let puzzlesPrice = puzzles * 2.6;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.1;
    let minuonsPrice = minuons * 8.2;
    let trainsPrice = trains * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minuonsPrice + trainsPrice;

    if (toys >= 50) {
        totalPrice = totalPrice - totalPrice * 0.25;
    }
    totalPrice = totalPrice - totalPrice * 0.10;

    if (totalPrice >= price) {
        let leftMoney = totalPrice - price;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
    }
    else {
        let needeMoney = price - totalPrice;
        console.log(`Not enough money! ${needeMoney.toFixed(2)} lv needed.`)
    }
}