function traveling(input) {
  let destination = input[0]
  //let neededMoney = Number(input[1])
  let index = 1;
  //let money = 0;
  while (destination !== "End") {
    let neededMoney = Number(input[index])
    index++
    let save = 0;
    while (save < neededMoney) {
      let savings = Number(input[index]);
      index++;
      save += savings;
    }
    if (save >= neededMoney) {
      console.log(`Going to ${destination}!`)
    }
    destination = input[index]
    index++
  }
}