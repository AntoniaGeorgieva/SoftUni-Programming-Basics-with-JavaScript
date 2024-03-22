function vacation(input) {
  //Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
  //Налични пари - реално число в интервала [0.00... 25000.00]
  //След това многократно се четат по два реда:
  //Вид действие – текст с възможности "spend" и "save".
  //Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]

  let neededMoney = Number(input[0]);
  let currentMoney = Number(input[1]);
  let index = 2;
  let spendDays = 0;
  let days = 0;
  let currentInput = input[index];
  while (currentMoney < neededMoney) {
    index++;
    days++;
    if (currentInput === "spend") {
      spendDays++;
      if (spendDays >= 5) {
        console.log("You can't save the money.");
        console.log(days);
        break;
      }
      let moneyToSpend = Number(input[index]);
      currentMoney -= moneyToSpend;

      if (currentMoney < 0) {
        currentMoney = 0;
      }
    }
    else if (currentInput === "save") {
      spendDays = 0;
      let moneyToSave = Number(input[index]);
      currentMoney += moneyToSave;
    }
    index++;
    currentInput = input[index];
  }
  if (currentMoney >= neededMoney) {
    console.log(`You saved the money for ${days} days.`)
  }
}