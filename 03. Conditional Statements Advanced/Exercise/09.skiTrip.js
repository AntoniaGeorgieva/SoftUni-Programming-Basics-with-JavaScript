function skiTrip(input) {
  let days = Number(input[0]);
  let room = input[1];
  let feedback = input[2];
  let price = 0;

  switch (room) {
    case "room for one person":
      price = (days - 1) * 18;
      break;

    case "apartment":
      price = (days - 1) * 25;
      if (days < 10) {
        price = price - price * 0.3
      }
      else if (days >= 10 && days <= 15) {
        price = price - price * 0.35
      }
      else {
        price = price - price * 0.5
      }
      break;

    case "president apartment":
      price = (days - 1) * 35;
      if (days < 10) {
        price = price - price * 0.1
      }
      else if (days >= 10 && days <= 15) {
        price = price - price * 0.15
      }
      else {
        price = price - price * 0.2
      }
      break;
  }
  if (feedback === "positive") {
    price = price + price * 0.25;
  }
  else if (feedback === "negative") {
    price = price - price * 0.1;
  }
  console.log(price.toFixed(2))
}