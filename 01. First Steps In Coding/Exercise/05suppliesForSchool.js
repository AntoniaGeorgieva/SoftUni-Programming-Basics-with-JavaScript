function solve(input)
{
   let pens = Number(input[0]);
   let markers = Number(input[1]);
   let l = Number(input[2]);
   let percent = Number(input[3]);
   let a = pens * 5.80;
   let b = markers * 7.20; 
   let c = l * 1.20;
   let price = a + b + c;
   let endPrice = price - (percent / 100 * price)
   console.log(endPrice)
}