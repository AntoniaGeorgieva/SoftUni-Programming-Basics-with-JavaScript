function operationsBetweenNumbers(input) {
  let a = Number(input[0])
  let b = Number(input[1])
  let operation = input[2]
  let result = 0;
  let c = "";

  switch (operation) {
    case "+":
      result = a + b;
      if (result % 2 === 0) {
        c = "even"
      }
      else {
        c = "odd"
      }
      console.log(`${a} ${operation} ${b} = ${result} - ${c}`)
      break;

    case "-":
      result = a - b;
      if (result % 2 === 0) {
        c = "even"
      }
      else {
        c = "odd"
      }
      console.log(`${a} ${operation} ${b} = ${result} - ${c}`)
      break;

    case "*":
      result = a * b;
      if (result % 2 === 0) {
        c = "even"
      }
      else {
        c = "odd"
      }
      console.log(`${a} ${operation} ${b} = ${result} - ${c}`)
      break;

    case "/":
      result = a / b;
      if (b === 0) {
        console.log(`Cannot divide ${a} by zero`)
      }
      else {
        console.log(`${a} / ${b} = ${result}`)
      }
      break;

    case "%":
      result = a % b;
      if (b === 0) {
        console.log(`Cannot divide ${a} by zero`)
      }
      else {
        console.log(`${a} % ${b} = ${result}`)
      }
      break;
  }
}