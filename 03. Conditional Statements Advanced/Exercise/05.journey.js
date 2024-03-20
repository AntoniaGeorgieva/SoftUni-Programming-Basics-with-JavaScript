function journey(input) {
  let budget = Number(input[0])
  let season = input[1];
  let destination = "";
  let place = "";
  let price = 0;

  switch (season) {
    case "summer":
      destination = "Camp";
      if (budget <= 100) {
        place = "Bulgaria";
        price = 0.3 * budget;
      }
      else if (budget <= 1000) {
        place = "Balkans";
        price = 0.4 * budget;
      }
      else if (budget > 1000) {
        place = "Europe";
        price = 0.9 * budget;
        destination = "Hotel";
      }

      break;

    case "winter":
      destination = "Hotel";
      if (budget <= 100) {
        place = "Bulgaria";
        price = 0.7 * budget;
      }
      else if (budget <= 1000) {
        place = "Balkans";
        price = 0.8 * budget;
      }
      else if (budget > 1000) {
        place = "Europe";
        price = 0.9 * budget;

      }
      break;
  }
  console.log(`Somewhere in ${place}`)
  console.log(`${destination} - ${price.toFixed(2)}`)
}