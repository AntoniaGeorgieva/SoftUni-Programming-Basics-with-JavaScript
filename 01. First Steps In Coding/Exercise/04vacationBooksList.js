function solve(input) {
    let allPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let hours = (allPages / pagesForHour) / days;
    console.log(hours)
}