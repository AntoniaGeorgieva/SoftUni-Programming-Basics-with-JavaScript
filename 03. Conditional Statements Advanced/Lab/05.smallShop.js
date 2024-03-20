function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let quality = Number(input[2]);
  let price = 0;

  switch (city) {
    case "Sofia":
      if (product === "coffee") {
        price = quality * 0.5;
      }
      else if (product === "water") {
        price = quality * 0.8;
      }
      else if (product === "beer") {
        price = quality * 1.2;
      }
      else if (product === "sweets") {
        price = quality * 1.45;
      }
      else if (product === "peanuts") {
        price = quality * 1.6;
      }
      break;

    case "Plovdiv":
      if (product === "coffee") {
        price = quality * 0.4;
      }
      else if (product === "water") {
        price = quality * 0.7;
      }
      else if (product === "beer") {
        price = quality * 1.15;
      }
      else if (product === "sweets") {
        price = quality * 1.3;
      }
      else if (product === "peanuts") {
        price = quality * 1.5;
      }
      break;
    case "Varna":
      if (product === "coffee") {
        price = quality * 0.45;
      }
      else if (product === "water") {
        price = quality * 0.7;
      }
      else if (product === "beer") {
        price = quality * 1.1;
      }
      else if (product === "sweets") {
        price = quality * 1.35;
      }
      else if (product === "peanuts") {
        price = quality * 1.55;
      }
      break;
  }
  console.log(price)
}