function solve(input)
{
    let chickens = Number(input[0]);
    let fishes = Number(input[1]);
    let vegans = Number(input[2]);

    let chickenPrice = 10.35 * chickens; 
    let fishPrice = fishes * 12.40;
    let veganPrice = 8.15 * vegans;
    let priceForFood = chickenPrice + fishPrice + veganPrice;

    let dessertPrice = 0.2 * priceForFood;

    let price = priceForFood + dessertPrice + 2.50;
    console.log(price)
}