function accountBalance(input) {
  let text = input[0]
  let index = 1;

  let sum = 0;
  while (text !== "NoMoreMoney") {
    let money = Number(text)

    if (money < 0) {
      console.log("Invalid operation!")
      break;
    }
    sum += money;
    console.log("Increase: " + money.toFixed(2));
    text = input[index]
    index++;
  }
  console.log("Total: " + sum.toFixed(2))
}