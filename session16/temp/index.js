let colors = [
    "red",
    "green",
    "blue"
]


let res = colors.map((c)=> `<li>${c}</li>`)

document.getElementById("res").innerHTML = res