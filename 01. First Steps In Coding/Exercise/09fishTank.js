function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percent = Number(input[3]);

    let v = a * b * c;
    let vInL = v * 0.001;
    let sand = percent / 100;
    let water = vInL * (1 - sand);

    console.log(water)
}