function hotelRoom(input) {
  let mouth = input[0];
  let nights = Number(input[1]);
  let priceStudio = 0;
  let priceApartment = 0;

  switch (mouth) {
    case "May":
    case "October":
      priceStudio = 50 * nights;
      priceApartment = 65 * nights;
      if (nights > 14) {
        priceStudio -= priceStudio * 0.3;
      }
      else if (nights > 7) {
        priceStudio -= priceStudio * 0.05;
      }
      break;
    case "June":
    case "September":
      priceStudio = 75.20 * nights;
      priceApartment = 68.70 * nights;
      if (nights > 14) {
        priceStudio -= priceApartment * 0.2;
      }
      break;
    case "July":
    case "August":
      priceStudio = 76 * nights;
      priceApartment = 77 * nights;
      break;
  }
  if (nights > 14) {
    priceApartment -= priceApartment * 0.1;
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}