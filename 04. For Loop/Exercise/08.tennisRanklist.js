function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let totalPoints = startingPoints;
  let totalWins = 0;

  for (let i = 2; i <= tournaments + 1; i++) {
    let tournament = input[i];

    if (tournament == 'W') {
      totalPoints += 2000;
      totalWins++;
    } else if (tournament == 'F') {
      totalPoints += 1200;
    } else if (tournament == 'SF') {
      totalPoints += 720;
    }
  }

  let averagePoints = Math.floor((totalPoints - startingPoints) / tournaments);
  let winPercentage = ((totalWins / tournaments) * 100);

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${winPercentage.toFixed(2)}%`);
}

