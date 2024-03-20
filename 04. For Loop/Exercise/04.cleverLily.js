function cleverLily(input) {
  let age = Number(input[0])
  let washmashine = Number(input[1])
  let toyPrice = Number(input[2])
  let price = 0;
  let toys = 0;
  let savedMoney = 0;
  let stolenMoney = 0;
  let addMoney = 10;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 1) {
      toys++;
    }
    else {
      stolenMoney++;
      savedMoney += addMoney
      addMoney += 10
    }
  }
  price = (toys * toyPrice + savedMoney) - stolenMoney
  if (price >= washmashine) {
    let N = price - washmashine
    console.log(`Yes! ${N.toFixed(2)}`)
  }
  else {
    let M = washmashine - price;
    console.log(`No! ${M.toFixed(2)}`)
  }
}