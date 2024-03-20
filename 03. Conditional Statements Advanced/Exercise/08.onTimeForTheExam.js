function onTimeForTheExam(input) {
  let examHours = Number(input[0]);
  let examMin = Number(input[1]);
  let comingHours = Number(input[2]);
  let comingMin = Number(input[3]);

  let examTime = examHours * 60 + examMin;
  let arrivalTime = comingHours * 60 + comingMin;
  let timeDiff = examTime - arrivalTime;

  if (timeDiff >= 0 && timeDiff <= 30) {
    console.log("On time");
  }
  else if (timeDiff > 30) {
    console.log("Early");
  }
  else if (timeDiff < 0) {
    console.log("Late");
  }

  if (timeDiff >= 1 && timeDiff < 60) {
    console.log(`${timeDiff} minutes before the start`)
  }
  else if (timeDiff >= 60) {
    let hours = Math.abs(timeDiff / 60);
    let min = timeDiff % 60;
    if (min < 10) {
      console.log(`${hours}:0${min} hours before the start`)
    }
    else {
      console.log(`${hours}:${min} hours before the start`)
    }
  }
  else if (timeDiff > -60 && timeDiff < 0) {
    timeDiff *= -1;
    console.log(`${timeDiff} minutes after the start`)
  }
  else if (timeDiff <= -60) {
    timeDiff *= -1;
    let hours = Math.abs(timeDiff / 60);
    let min = timeDiff % 60;
    if (min < 10) {
      console.log(`${hours}:0${min} hours after the start`)
    }
    else {
      console.log(`${hours}:${min} hours after the start`)
    }
  }
}