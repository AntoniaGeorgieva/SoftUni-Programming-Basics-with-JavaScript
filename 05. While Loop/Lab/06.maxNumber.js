function maxNumber(input) {
  let number = input[0]
  let index = 1;
  let maxNum = number;
  while (number !== "Stop") {
    let a = Number(number)
    if (a > maxNum) {
      maxNum = a;
    }
    number = input[index]
    index++;
  }
  console.log(maxNum)
}