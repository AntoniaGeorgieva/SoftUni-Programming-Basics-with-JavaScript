function solve(input) {
    let nailon1 = Number(input[0]);
    let nailon = nailon1 + 2;
    let paint1 = Number(input[1]);
    let paint = paint1 + 0.1 * paint1;
    let l = Number(input[2]);
    let hoursWork = Number(input[3]);

    let nailonPrice = 1.50 * nailon;
    let paintPrice = 14.50 * paint;
    let lPrice = 5.00 * l;

    let priceForMaterials = nailonPrice + paintPrice + lPrice + 0.40;
    let priceForWork = 0.3 * priceForMaterials * hoursWork;
    let endPrice = priceForMaterials + priceForWork;

    console.log(endPrice)
}