function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quality = input[2];
  let price = 0;

  if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    if (fruit === "banana") {
      price = 2.5 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "apple") {
      price = 1.2 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "orange") {
      price = 0.85 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "grapefruit") {
      price = 1.45 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "kiwi") {
      price = 2.7 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "pineapple") {
      price = 5.5 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "grapes") {
      price = 3.85 * quality;
      console.log(price.toFixed(2))
    }
    else {
      console.log("error");
    }
  }

  else if (day === "Saturday" || day === "Sunday") {
    if (fruit === "banana") {
      price = 2.7 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "apple") {
      price = 1.25 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "orange") {
      price = 0.90 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "grapefruit") {
      price = 1.6 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "kiwi") {
      price = 3 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "pineapple") {
      price = 5.6 * quality;
      console.log(price.toFixed(2))
    }
    else if (fruit === "grapes") {
      price = 4.2 * quality;
      console.log(price.toFixed(2))
    }
    else {
      console.log("error");
    }
  }
  else {
    console.log("error");
  }
}