function sumPrimeNonPrime(input) {
  let text = input[0];
  let index = 1;
  let primeSum = 0;
  let nonprimeSum = 0;
  let isComplex = false;
  while (text !== "stop") {
    let num = Number(text);
    if (num < 0) {
      console.log("Number is negative.");
      text = input[index];
      index++
      continue;
    }
    else {
      num = Number(text)
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isComplex = true;
          break;
        }
      }

      if (isComplex) {
        primeSum += num;
        isComplex = false;
      }
      else {
        nonprimeSum += num;
      }
    }
    text = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${nonprimeSum}`);
  console.log(`Sum of all non prime numbers is: ${primeSum}`);
}