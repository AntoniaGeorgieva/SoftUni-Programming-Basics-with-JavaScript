function sumOfNumbers(input) {
  let n = input[0]//1234
  let sum = 0;//0
  for (let i = 0; i < n.length; i++) {
    //let number = n[i]
    sum += Number(n[i]);
  }
  console.log(`The sum of the digits is:${sum}`)
}