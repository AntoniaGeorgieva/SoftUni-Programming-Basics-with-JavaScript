function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishers = Number(input[2]);
  let rent = 0;

  switch (season) {
    case "Spring":
      rent = 3000;
      break;
    case "Summer":
    case "Autumn":
      rent = 4200;
      break;
    case "Winter":
      rent = 2600;
      break;
  }
  if (fishers <= 6) {
    rent -= rent * 0.1;
  }
  else if (fishers <= 11) {
    rent -= rent * 0.15;
  }
  else {
    rent -= rent * 0.25;
  }

  if(season !== "Autumn" && fishers % 2 == 0) {
    rent = rent - rent * 0.5;
  }

  if (budget >= rent) {
    let a = budget - rent;
    console.log(`Yes! You have ${a.toFixed(2)} leva left.`)
  }
  else {
    let a = rent - budget;
    console.log(`Not enough money! You need ${a.toFixed(2)} leva.`)
  }
}
