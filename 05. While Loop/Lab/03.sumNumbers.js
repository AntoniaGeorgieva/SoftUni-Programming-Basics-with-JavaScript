function sumNumbers(input) {
  let number = Number(input[0]);
  let index = 1;
  let sum = 0;
  while (sum < number) {
    let a = Number(input[index])
    index++;
    sum += a;
  }
  console.log(sum);

}