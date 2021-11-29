// const field = document.querySelectorAll("form")
// const age =document.getElementById("num")
// const info = document.querySelector("h2")
//
// field[0].addEventListener("submit", myName)
//
// function myName (event){
//     event.preventDefault();
//     alert("Indre")
// }
//
// field[1].addEventListener("submit", myAge )
//
// function myAge (event) {
//     event.preventDefault();
//     const result = document.querySelector("input[name=age]").value
//     age.innerText = result;
// }

// const full = document.querySelector("form")
// const info = document.querySelector("h1")
//
// full.addEventListener("submit", fullInfo)
//
// function fullInfo(event) {
//     event.preventDefault();
//     const field = document.querySelector(".name").value
//     const age = document.querySelector(".num").value
//     if (age >= 18) {
//         info.innerText = `Vairuoti gali ${field}`
//     } else {
//         info.innerText = `Dar mokysis vairuoti: ${field}`
//     }
// }

//Part II

//
// const text = document.querySelector("h1")
// const field = document.querySelector("form")
// const age = document.querySelector(".numb")
//
// field.addEventListener("submit", ticket)
//
// let result = 0
//
// function ticket(event) {
//     event.preventDefault();
//     text.innerText = "6";
//     if (age.value < 16) {
//         result = 6 / 2;
//         console.log(result)
//         text.innerText = result;
//     }
//     if (age.value >= 60) {
//         result = 6 - 6 / 3;
//         text.innerText = result;
//     }
// }

//PartIII

const field = document.querySelector("form")
const inp1 = document.getElementById("inp1")
const inp2 = document.getElementById("inp2")
const inp3 = document.getElementById("inp3")
const text = document.querySelector("h1")



field.addEventListener('submit', check)

function check (event){
    event.preventDefault();
    text.innerText = "Negali eiti į kariuomenę"

    if(inp1.value >= 18 && inp1.value <= 30 && inp3.value === "notcriminal"){
        text.innerText = "Gali eiti į kariuomenę"
    }
}


