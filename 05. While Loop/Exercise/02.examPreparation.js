function examPreparation(input) {
  let index = 0;
  let allowBadGrades = input[index]//2
  index++;

  let badGrades = 0;
  let a = 0;
  let grades = 0;
  let lastProblem = "";
  let isFailed = true;
  while (badGrades < allowBadGrades) {
    let name = input[index]
    index++;

    if (name === "Enough") {
      isFailed = false;
      break;
    }
    lastProblem = name;
    let grade = Number(input[index])
    index++;
    if (grade <= 4) {
      badGrades++;
    }
    grades++;
    a += grade;

  }
  if (isFailed) {
    console.log(`You need a break, ${allowBadGrades} poor grades.`)
  }
  else {
    let average = a / grades;
    console.log(`Average score: ${average.toFixed(2)}`)
    console.log(`Number of problems: ${grades}`)
    console.log(`Last problem: ${lastProblem}`)
  }

}