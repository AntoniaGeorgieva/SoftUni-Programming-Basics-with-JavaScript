function minNumber(input) {
  let number = input[0]
  let index = 1;
  let minNum = Number.MAX_SAFE_INTEGER;
  while (number !== "Stop") {
    let a = Number(number)
    if (a < minNum) {
      minNum = a;
    }
    number = input[index]
    index++;
  }
  console.log(minNum)
}