function oldBooks(input) {
  let index = 0;
  let book = input[index]
  index++
  let text = input[index];
  index++;
  let count = 0;
  while (text != "No More Books") {
    text = input[index];
    index++;
    count++;
    if (text === book) {
      console.log(`You checked ${count} books and found it.`);
      return;
    }
  }
  if (text !== book) {
    console.log("The book you search is not here!");
    console.log(`You checked ${count} books.`)
  }
}