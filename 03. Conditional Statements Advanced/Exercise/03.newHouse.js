function newHouse(input) {
  let flowers = input[0];
  let countFlowers = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  switch (flowers) {
    case "Roses":
      price = countFlowers * 5;
      if (countFlowers > 80) {
        price = price - price * 0.1;
      }
      break;

    case "Dahlias":
      price = countFlowers * 3.8;
      if (countFlowers > 90) {
        price = price - price * 0.15;
      }
      break;

    case "Tulips":
      price = countFlowers * 2.8;
      if (countFlowers > 80) {
        price = price - price * 0.15;
      }
      break;

    case "Narcissus":
      price = countFlowers * 3;
      if (countFlowers < 120) {
        price = price + price * 0.15;
      }
      break;

    case "Gladiolus":
      price = countFlowers * 2.5;
      if (countFlowers < 80) {
        price = price + price * 0.2;
      }
      break;
  }

  if (budget >= price) {
    let a = budget - price
    console.log(`Hey, you have a great garden with ${countFlowers} ${flowers} and ${a.toFixed(2)} leva left.`)
  }
  else {
    let a = price - budget;
    console.log(`Not enough money, you need ${a.toFixed(2)} leva more.`)
  }

}