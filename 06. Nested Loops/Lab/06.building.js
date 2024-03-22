function building(input) {
  let floor = Number(input[0]);//6
  let rooms = Number(input[1]);//4

  for (let a = floor; a >= 1; a--) {
    let buff = "";
    for (let b = 0; b < rooms; b++) {
      if (a == floor) {
        buff += (`L${a}${b} `)
      }
      else if (a % 2 == 0) {
        buff += (`O${a}${b} `)
      }
      else {
        buff += (`A${a}${b} `)
      }

    }
    console.log(buff)
  }
}