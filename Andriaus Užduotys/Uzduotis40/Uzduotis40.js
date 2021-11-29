// const head =document.getElementById("text")
// const button = document.querySelector("#myButton")
//
// // button.addEventListener("click", buttonClick)
// // function buttonClick (){
// //     console.log("Paspausti")
// // } tas pats, tik trumpesnis variantas žemiau
//
// button.onclick = () => {
//     console.log("Paspausti")


// const button1 = document.querySelector("button")
// const button2 = document.getElementById("firstButton")
// const button3 = document.getElementsByClassName("myButton")
//
// button1.onclick = () => {
//     console.log("Push")
// }
//
// button2.onclick = () => {
//     console.log("Press")
// }
//
//
// button3[0].onclick = () => {
//     console.log("Text")
// }


// const head = document.querySelector("h1")
// const button = document.querySelector("button")
//
// button.onclick = () => {
//     head.innerText = "Laba diena"
// }

// const buttonOne = document.querySelectorAll("button")
// const head = document.querySelectorAll("h2")
// const square = document.querySelectorAll(".sq")
//
// console.log(buttonOne)
//
// buttonOne[0].onclick = () => {
//     head[0].innerText = "Show"
//     square[0].style.backgroundColor = "red";
// }
//
// buttonOne[1].onclick = () => {
//     head[1].innerText = "Must"
//     square[1].style.backgroundColor = "yellow";
// }
//
// buttonOne[2].onclick = () => {
//     head[2].innerText = "Go on"
//     square[2].style.backgroundColor = "blue";
// }

//HomeWork

const text = document.querySelectorAll("h3")
const button = document.querySelectorAll("button")
const letter1 = document.getElementById("l1")
const letter2 = document.getElementById("l2")
const letter3 = document.getElementById("l3")
const text2 = document.querySelectorAll('.but4')
const small = document.querySelector(`.sbox`)

button[0].onclick = () => {
    letter1.style.color = "#a16e81";
}

button[1].onclick = () => {
    letter2.style.color = "rgba(119, 231, 182, 0.47)";
}

button[2].onclick = () => {
    letter3.style.color = "#cccc76";
}

let trigger = true

button[3].onclick = () => {
    trigger = !trigger
    if (trigger) {
        text2[0].innerText = "Turn on"
        small.style.visibility = 'hidden';
    } else {
        text2[0].innerText = "Turn off"
        small.style.visibility = "visible";
    }
}



