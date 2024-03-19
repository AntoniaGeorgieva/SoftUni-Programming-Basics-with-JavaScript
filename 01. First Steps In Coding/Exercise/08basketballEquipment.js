function solve(input)
{
    let yearPrice = Number(input[0]);

    let shoes = yearPrice - 0.40 * yearPrice;
    let clothes = shoes - 0.20 * shoes;
    let ball = 0.25 * clothes;
    let accessories =  0.2 * ball;

    let price = shoes + clothes + ball + accessories + yearPrice;

console.log(price)
}