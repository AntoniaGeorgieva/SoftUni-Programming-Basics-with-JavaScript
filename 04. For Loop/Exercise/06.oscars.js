function oscars(input) {
  let actorName = input[0]
  let points = Number(input[1])
  let jury = Number(input[2])
  let index = 3;
  let actorPoints = 0;
  for (let i = 1; i <= jury; i++) {
    let name = input[index]
    index++;
    let juryPoints = Number(input[index])
    index++;
    actorPoints += (name.length * juryPoints / 2);
    if (actorPoints >= 1250.5 - points)
    {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(actorPoints + points).toFixed(1)}!`)
      break;
    }
  }
  actorPoints += points
  if (actorPoints < 1250.5) {
    let a = 1250.5 - actorPoints;
    console.log(`Sorry, ${actorName} you need ${a.toFixed(1)} more!`)
  }
}