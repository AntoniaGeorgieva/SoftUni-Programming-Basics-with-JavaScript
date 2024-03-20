function solve(input)
{
let a = Number(input[0]);
let bonus= 0

if(a <= 100)
{
    bonus = 5;
}
else if(a > 1000)
{
    bonus = 0.1 * a;
}
else
{
    bonus = 0.2 * a;
}

if(a % 2 == 0)
{
    bonus+=1;
}
else if(a % 10 == 5)
{
    bonus+=2;
}
let total = a + bonus;
console.log(bonus)
console.log(total);
}