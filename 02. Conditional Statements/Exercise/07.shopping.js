function solve(input)
{
let budget = Number(input[0]);
let videoGames = Number(input[1]);
let procesors = Number(input[2]);
let pamet = Number(input[3]);

let videoGamesPrice = videoGames * 250;
let procesorsPrice = procesors * 0.35 * videoGamesPrice;
let pametPrice = pamet * 0.1 * videoGamesPrice;
let price = videoGamesPrice + procesorsPrice + pametPrice;

if(videoGames > procesors)
{
price = price - 0.15 * price;
}

if (budget >= price)
{
    let a = budget - price;
    console.log(`You have ${a.toFixed(2)} leva left!`)
}
else
{
    let a = price - budget;
    console.log(`Not enough money! You need ${a.toFixed(2)} leva more!`)
}
}