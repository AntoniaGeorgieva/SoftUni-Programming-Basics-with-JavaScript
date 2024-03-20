function personalTitles(input) {
  let a = Number(input[0]);
  let b = input[1];
  if (a >= 16) {
    if (b === "m") {
      console.log("Mr.")
    }
    else if (b === "f") {
      console.log("Ms.")
    }
  }
  else {
    if (b === "m") {
      console.log("Master")
    }
    else if (b === "f") {
      console.log("Miss")
    }
  }
}