// const button1 = document.querySelector("#a1")
// const button2 = document.querySelector("#a2")
// const button3 = document.querySelector("#a3")
//
// button1.onclick = (event) => {
//     event.path[1].style.backgroundColor = `${event.target.innerHTML}`
// }
//
// button2.onclick = (event) => {
//     event.path[1].style.backgroundColor = `${event.target.innerHTML}`
// }
//
// button3.onclick = (event) => {
//     event.path[1].style.backgroundColor = `${event.target.innerHTML}`
// }


//Homework I
const game = document.querySelector(".game")


let smSq = []


for (let i = 0; i < 100; i++) {
    let randNumber = Math.random() < 0.1
    smSq.push(randNumber)
}

const sq = document.getElementsByClassName("sqr")

console.log(sq)
console.log(smSq)

smSq.map(x => {
    game.innerHTML += `<div class="sqr"></div>`
    if(x === true){
        console.log("Bomb")
    } else {
        console.log("No")
    }
})












