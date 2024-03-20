function tradeCommissions(input) {
  let city = input[0];
  let sells = Number(input[1]);
  let comision = 0;
  if (city === "Sofia") {
    if (sells >= 0 && sells <= 500) {
      comision = sells * 0.05;
      console.log(comision.toFixed(2));
    }
    else if (sells > 500 && sells <= 1000) {
      comision = sells * 0.07;
      console.log(comision.toFixed(2));
    }
    else if (sells > 1000 && sells <= 10000) {
      comision = sells * 0.08;
      console.log(comision.toFixed(2));
    }
    else if (sells > 10000) {
      comision = sells * 0.12;
      console.log(comision.toFixed(2));
    }
    else {
      console.log("error")
    }
  }
  else if (city === "Varna") {
    if (sells >= 0 && sells <= 500) {
      comision = sells * 0.045;
      console.log(comision.toFixed(2));
    }
    else if (sells > 500 && sells <= 1000) {
      comision = sells * 0.075;
      console.log(comision.toFixed(2));
    }
    else if (sells > 1000 && sells <= 10000) {
      comision = sells * 0.1;
      console.log(comision.toFixed(2));
    }
    else if (sells > 10000) {
      comision = sells * 0.13;
      console.log(comision.toFixed(2));
    }
    else {
      console.log("error")
    }
  }
  else if (city === "Plovdiv") {
    if (sells >= 0 && sells <= 500) {
      comision = sells * 0.055;
      console.log(comision.toFixed(2));
    }
    else if (sells > 500 && sells <= 1000) {
      comision = sells * 0.08;
      console.log(comision.toFixed(2));
    }
    else if (sells > 1000 && sells <= 10000) {
      comision = sells * 0.12;
      console.log(comision.toFixed(2));
    }
    else if (sells > 10000) {
      comision = sells * 0.145;
      console.log(comision.toFixed(2));
    }
    else {
      console.log("error")
    }
  }
  else {
    console.log("error");
  }
}