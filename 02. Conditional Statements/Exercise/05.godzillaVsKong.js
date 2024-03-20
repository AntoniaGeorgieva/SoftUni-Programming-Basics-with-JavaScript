function solve(input)
{
let budget = Number(input[0]);
let statists = Number(input[1]);
let clothesForOneStatist = Number(input[2]);
let clothesPrice = statists * clothesForOneStatist;
let decor = 0.1 * budget;
if (statists > 150)
{
    clothesPrice = clothesPrice - clothesPrice * 0.1;
}
let money = decor + clothesPrice;
if (money > budget)
{
    let neededMoney = money - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
}
else
{
    let leftMoney = budget - money;
    console.log("Action!");
    console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
}
}