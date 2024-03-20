function salary(input) {
  let n = Number(input[0])
  let salary = Number(input[1])
  let index = 2;
  for (let i = 1; i <= n; i++) {
    let website = input[index]
    index++
    if (website === "Facebook") {
      salary -= 150
    }
    else if (website === "Instagram") {
      salary -= 100;
    }
    else if (website === "Reddit") {
      salary -= 50;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.")
      break;
    }
  }
  if (salary > 0) {
    console.log(salary)
  }
}