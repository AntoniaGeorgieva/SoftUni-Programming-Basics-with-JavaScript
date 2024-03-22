function specialNumbers(input) {
  let n = Number(input[0]);
  let buff = "";

  for (let i = 1111; i <= 9999; i++) {
    let a = Math.floor(i / 1000);
    let b = Math.floor((i / 100) - (a * 10));
    let c = Math.floor((i / 10) - ((a * 100) + (b * 10)));
    let d = Math.floor(i - ((a * 1000) + (b * 100) + (c * 10)));
    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
      buff += (`${i} `);
    }
  }

  console.log(buff);
}