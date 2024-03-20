function solve(input)
{
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let total = a + b + c;
let minutes = Math.floor(total / 60);
let seconds = total % 60;
if (seconds < 10)
{
    console.log(`${minutes}:0${seconds}`);
}
else
{
console.log(`${minutes}:${seconds}`);
}
}