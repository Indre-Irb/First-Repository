// const answ = document.querySelector("h1")
// const button = document.querySelector("button")
// const inp = document.querySelector("input")
//
// const round = document.querySelector(".rnd")
//
// let result = 0
//
// inp.oninput = () => {
//     result = inp.value.length;
//     answ.innerText = `Text lenght: ${result}`;
//     if (result <= 10){
//         round.style.backgroundColor = "green";
//     } if (result > 10 && result <=30) {
//         round.style.backgroundColor = "yellow";
//     } if (result > 30) {
//         round.style.backgroundColor = "red";
//     }
// }

//Part II

// const button = document.querySelector("button")
// const inp = document.querySelector("input")
//
// button.onclick = () => {
//     if (inp.value.length > 10 && inp.value.includes("@") && inp.value.includes(".")){
//     inp.style.border = "2px green solid";
//     } else {
//         inp.style.border = "2px red solid";
//     }
// }

//PartIII

const icon = document.querySelectorAll("i")

const colors = [
    "#7a7a7a",
    "#363636",
    "#a0ff7b",
    "#ffff80",
    "#a7ffe1",
    "#6aa3ff",
    "#ca56ff",
    "#ff397c"
]


icon[0].onclick = () => {
    icon[0].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[1].onclick = () => {
    icon[1].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[2].onclick = () => {
    icon[2].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[3].onclick = () => {
    icon[3].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[4].onclick = () => {
    icon[4].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[5].onclick = () => {
    icon[5].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[6].onclick = () => {
    icon[6].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[7].onclick = () => {
    icon[7].style.color = colors[Math.floor(Math.random()*colors.length)];
}
icon[8].onclick = () => {
    icon[8].style.color = colors[Math.floor(Math.random()*colors.length)];
}


