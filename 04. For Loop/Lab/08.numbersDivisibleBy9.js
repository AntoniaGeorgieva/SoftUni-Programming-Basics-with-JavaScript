function numbersDivisibleBy9(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let sum = 0;
  let output = "";
  for (let i = a; i <= b; i++) {
    if (i % 9 === 0) {
      output += i + "\n";
      sum += i;
    }
  }
  console.log("The sum: " + sum)
  console.log(output)
}