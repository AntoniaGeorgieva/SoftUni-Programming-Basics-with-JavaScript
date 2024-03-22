function graduation(input) {
  let name = input[0]
  let index = 1;
  let klass = 1;
  let bad = 0;
  let a = 0;
  let b = 0;
  while (klass <= 12) {
    let yearGrade = Number(input[index]);
    index++;
    a += yearGrade;
    b++;
    if (yearGrade >= 4) {
      klass++;
    }
    else {
      bad++;
    }

    if (bad > 1) {
      console.log(`${name} has been excluded at ${klass} grade`)
      break;

    }
  }

  if (bad < 1) {
    let average = a / b;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
  }
}