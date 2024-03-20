function trekkingMania(input) {
  let groups = Number(input[0]);
  let totalPeople = 0;
  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let i = 1; i <= groups; i++) {
    let people = Number(input[i]);
    totalPeople += people;

    //•	Група до 5 човека – изкачват Мусала
    //•	Група от 6 до 12 човека – изкачват Монблан
    //•	Група от 13 до 25 човека – изкачват Килиманджаро
    //•	Група от 26 до 40 човека –  изкачват К2
    //•	Група от 41 или повече човека – изкачват Еверест
    if (people <= 5) {
      musala += people;
    } else if (people <= 12) {
      monblan += people;
    } else if (people <= 25) {
      kilimandjaro += people;
    } else if (people <= 40) {
      k2 += people;
    } else {
      everest += people;
    }
  }

  let musalaPercent = musala / totalPeople * 100;
  let monblanPercent = monblan / totalPeople * 100;
  let kilimandjaroPercent = kilimandjaro / totalPeople * 100;
  let k2Percent = k2 / totalPeople * 100;
  let everestPercent = everest / totalPeople * 100;

  console.log(musalaPercent.toFixed(2) + "%");
  console.log(monblanPercent.toFixed(2) + "%");
  console.log(kilimandjaroPercent.toFixed(2) + "%");
  console.log(k2Percent.toFixed(2) + "%");
  console.log(everestPercent.toFixed(2) + "%");
}