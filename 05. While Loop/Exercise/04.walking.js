function walking(input) {
  let index = 0;
  let footSteps = input[index];
  index++;
  let currentFootsteps = 0;
  while (currentFootsteps < 10000) {
    if (footSteps === "Going home") {
      let stepsToHome = Number(input[index])
      index++
      currentFootsteps += stepsToHome;
      if (currentFootsteps < 10000) {
        let a = 10000 - currentFootsteps;
        console.log(`${a} more steps to reach goal.`)
        break;
      }
    }
    else {
      let footSteps1 = Number(footSteps);
      currentFootsteps += footSteps1;
    }
    footSteps = input[index];
    index++;
  }
  if (currentFootsteps >= 10000) {
    console.log("Goal reached! Good job!");
    let a = currentFootsteps - 10000;
    console.log(`${a} steps over the goal!`)
  }
}