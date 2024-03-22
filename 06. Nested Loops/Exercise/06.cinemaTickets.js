function cinemaTickets(input) {
  let student = 0;//2
  let standard = 0;//3
  let kid = 0;//1
  let totalTicketsBought = 0;//6
  for (let i = 2; i < input.length + 4; i += 3) {
    if (input[i - 2] == "Finish") {
      console.log(`Total tickets: ${totalTicketsBought}`);
      let percentStudent = (student / totalTicketsBought) * 100;
      console.log(`${percentStudent.toFixed(2)}% student tickets.`);
      let percentStandart = (standard / totalTicketsBought) * 100;
      console.log(`${percentStandart.toFixed(2)}% standard tickets.`);
      let percentKid = (kid / totalTicketsBought) * 100;
      console.log(`${percentKid.toFixed(2)}% kids tickets.`);
      return;
    }
    let filmName = input[i - 2];//Taxi
    let freePlaces = input[i - 1];//10
    let boughtTickets = 0;//6

    while (boughtTickets < freePlaces) {
      if (input[i] == "student") {
        totalTicketsBought++;
        boughtTickets++;
        student++;
      } else if (input[i] == "standard") {
        totalTicketsBought++;
        boughtTickets++;
        standard++;
      } else if (input[i] == "kid") {
        totalTicketsBought++;
        boughtTickets++;
        kid++;
      } else if (input[i] == "End") {
        break;
      }
      if (!(boughtTickets >= freePlaces)) {
        i++;
      }
    }

    let percentBoughtTickets = (boughtTickets / freePlaces) * 100;
    console.log(`${filmName} - ${percentBoughtTickets.toFixed(2)}% full.`);
  }
}