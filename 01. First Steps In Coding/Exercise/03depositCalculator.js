function solve(input)
{
let deposit = Number(input[0]);
let mouths = Number(input[1]);
let yearPercent = Number(input[2]);
let c = deposit  + mouths *  ((deposit * yearPercent / 100 ) / 12);
console.log(c);
}