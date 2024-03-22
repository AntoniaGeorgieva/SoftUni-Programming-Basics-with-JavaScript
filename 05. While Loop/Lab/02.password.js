function password(input) {
  let name = input[0]
  let password = input[1]
  let test = input[2]
  let index = 3
  while (test !== password) {
    test = input[index];
    index++;
  }
  console.log(`Welcome ${name}!`)
} 