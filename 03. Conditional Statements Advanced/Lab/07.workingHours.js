function workingHours(input) {
  let hours = Number(input[0])
  let day = input[1];
  if (day != "Sunday" && hours >= 10 && hours <= 18) {
    console.log("open")
  }
  else {
    console.log("closed")
  }
}