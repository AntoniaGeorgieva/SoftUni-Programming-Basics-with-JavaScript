function histogram(input) {
  let n = Number(input[0])
  let p1 = 0
  let p2 = 0
  let p3 = 0
  let p4 = 0
  let p5 = 0
  for (let i = 1; i <= n; i++) {
    let m = Number(input[i])
    if (m < 200) {
      p1++;
    }
    else if (m >= 200 && m <= 399) {
      p2++;
    }
    else if (m >= 400 && m <= 599) {
      p3++;
    }
    else if (m >= 600 && m <= 799) {
      p4++;
    }
    else {
      p5++
    }
  }
  let pp1 = p1 / n * 100;
  let pp2 = p2 / n * 100;
  let pp3 = p3 / n * 100;
  let pp4 = p4 / n * 100;
  let pp5 = p5 / n * 100;
  console.log(pp1.toFixed(2) + "%")
  console.log(pp2.toFixed(2) + "%")
  console.log(pp3.toFixed(2) + "%")
  console.log(pp4.toFixed(2) + "%")
  console.log(pp5.toFixed(2) + "%")
}