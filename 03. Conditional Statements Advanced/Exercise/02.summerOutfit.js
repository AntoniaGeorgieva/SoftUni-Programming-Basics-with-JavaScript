function summerOutfit(input) {
  let grad = Number(input[0]);
  let time = input[1];
  let outfit = "";
  let shoes = "";

  switch (time) {
    case "Morning":
      if (grad >= 10 && grad <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers"
      }
      else if (grad > 18 && grad <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins"
      }
      else if (grad >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals"
      }
      break;
    case "Afternoon":
      if (grad >= 10 && grad <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins"
      }
      else if (grad > 18 && grad <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals"
      }
      else if (grad >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot"
      }
      break;
    case "Evening":
      if (grad >= 10 && grad <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins"
      }
      else if (grad > 18 && grad <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins"
      }
      else if (grad >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins"
      }
      break;
  }
  console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`)
}