function cinema(input) {
  let type = input[0];
  let r = Number(input[1]);
  let c = Number(input[2]);
  let places = r * c;
  let incomes = 0;
  switch (type) {
    case "Premiere":
      incomes = places * 12;
      break;

    case "Normal":
      incomes = places * 7.5;
      break;

    case "Discount":
      incomes = places * 5;
      break;
  }
  console.log(`${incomes.toFixed(2)} leva`)
}