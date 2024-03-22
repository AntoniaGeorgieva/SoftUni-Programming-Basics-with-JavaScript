function cake(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let cakeSize = length * width;
  let pieces = 0;
  let index = 2;
  let command = input[index]
  while (command !== "STOP") {
    let cakeParts = Number(command);
    pieces += cakeParts;
    if (pieces > cakeSize) {
      console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`);
      break;
    }
    index++
    command = input[index];
  }
  if (command === "STOP" && pieces <= cakeSize) {
    console.log(`${cakeSize - pieces} pieces are left.`)
  }
}