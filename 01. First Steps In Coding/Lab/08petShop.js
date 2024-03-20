function solve(input) {
    let dogs = Number(input[0]);
    let cats = Number(input[1]);
    let dogsFood = dogs * 2.50;
    let catsFood = cats * 4;
    let price = dogsFood + catsFood;
    console.log(`${price} lv.`)
}