function excellent(input)
{
    let a = input[0];
    if (a === "square")
    {
        let b = input[1];
        console.log((b * b).toFixed(3));
    }
    else if (a === "rectangle")
    {
        let b = input[1];
        let c = input[2];
        console.log((b * c).toFixed(3));
    }
    else if (a === "circle")
    {
        let r = input[1];
        console.log((r * r * Math.PI).toFixed(3));
    }
    else if (a === "triangle")
    {
        let b = input[1];
        let h = input[2];
        console.log(((b * h) / 2).toFixed(3));
    }
}