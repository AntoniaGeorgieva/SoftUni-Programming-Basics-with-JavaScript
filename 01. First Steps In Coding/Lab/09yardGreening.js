function solve(input) {
    let km = Number(input[0]);
    let price = km * 7.61;
    let finalPrice = price - 0.18 * price;
    let discount = 0.18 * price;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}