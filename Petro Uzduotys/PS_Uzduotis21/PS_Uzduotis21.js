//Part1
// const but = document.querySelector("button")
// const text = document.querySelector("h1")
// const text2 = document.querySelector("p")
//
// // but.onclick = () => {
// //     text.innerText = "Indre"
// // }
//
// but.addEventListener("click", nameClick)
//
// function nameClick() {
//     text.innerText = "Indre"
//     text2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur eius excepturi libero molestias nam nesciunt odit perspiciatis quisquam sunt!"
//
// }

/**/// Part II

// const button = document.querySelector("button")
// const text = document.querySelector("h1")
// const good = document.getElementById("ojkoksgerasskaicius")
// const text2 = document.querySelector('p')
//
// button.addEventListener("click", countNum)
// let counter = 1;
// function countNum () {
//     good.innerHTML = counter++
// }
//
// text2.addEventListener("copy", notAllow )
// function notAllow () {
//     alert("You're not allowed to copy")
// }
/**/
//Part 3

// const text = document.querySelector("h1")
// const button = document.querySelector("button")
//
// button.addEventListener("click", random)
//
// function random(){
//     text.innerText= Math.ceil(Math.random()*100)
// }

//Part4
// const text = document.querySelector("h1")
// const button = document.querySelectorAll("button")
//
// button[0].addEventListener("click", choose)
//
// function choose() {
//     text.innerText = "Alus"
// }
//
// button[1].addEventListener("click", choose1)
// function choose1() {
//     text.innerText = "Nepilnametis-nieko neturime"
// }

//Part5

// const button = document.querySelectorAll("button")
// const text = document.querySelector("h1")
//
// let number = Math.ceil(Math.random()*3)
// console.log(number)
//
// button[0].onclick = () => {
//     if (number === 1){
//         text.innerText = "Yay"
//     } else {
//         text.innerText = "Nay"
//     }
// }
// button[1].onclick = () => {
//     if (number === 2){
//         text.innerText = "Yay"
//     } else {
//         text.innerText = "Nay"
//     }
// }
// button[2].onclick = () => {
//     if (number === 3){
//         text.innerText = "Yay"
//     } else {
//         text.innerText = "Nay"
//     }
// }

//Part6

const text = document.querySelector("h2")
const button = document.querySelectorAll("button")
const text2 = document.querySelector("h1")

button[0].onclick = () => {
    text.innerText = "Nelausote manęs"
}
button[1].onclick = () => {
    text.innerText = "Nelausote manęs"
}
button[2].onclick = () => {
    text.innerText = "Nelausote manęs"
}

onmousemove = () => {
    text2.innerText = "Kiek galima neklausyti"
}





