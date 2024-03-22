function readText(input) {
  let index = 0;
  let text = input[0]
  index++
  while (text !== "Stop") {
    console.log(text)
    text = input[index]
    index++

  }
}