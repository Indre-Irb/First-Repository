//Uzduotis1

// const myName = document.querySelector("h1")
//
// myName.onclick = () => {
//     myName.style.color = `red`;
//     myName.style.fontSize = `60px`;
//     myName.style.textAlign = `center`;
// }

//Uzduotis2

// const button = document.querySelector("button")
//
// button.style.position = `absolute`;
// button.onclick = () => {
//     if (button.style.top === `0%`){
//         button.style.top = `90%`;
//         button.style.left = `90%`;
//     } else {
//         button.style.top = `0%`;
//         button.style.left = `0%`;
//     }
// }

//Uzduotis3

// const button = document.querySelector("button")
//
// button.style.position = `absolute`;
// button.style.top = `0%`;
// button.style.left = `0%`;
//
// button.onclick = () => {
//
//     if (button.style.top === `0%` && button.style.left === `0%`){
//         button.style.top = `0%`;
//         button.style.left = `90%`;
//     } else if (button.style.top === `0%` && button.style.left === `90%`){
//         button.style.top = `90%`;
//         button.style.left = `90%`;
//     } else if (button.style.top === `90%` && button.style.left === `90%`) {
//         button.style.top = `90%`;
//         button.style.left = `0%`;
//     } else {
//         button.style.top = `0%`;
//         button.style.left = `0%`;
//     }
// }

//Uzduotis4

// const name = document.querySelector("input")
//
//
// name.addEventListener(`input`, ()=>{
// for (let i = 0; i < name.value.length; i++) {
//     console.log(name.value.length)
//     if (name.value.length <= 2){
//         name.style.backgroundColor = `red`;
//     } else {
//         name.style.backgroundColor = `green`;
//     }
// }
// })

//Uzduotis5

// const button = document.querySelector("button")
//
// const color = [
//     "red",
//     "green",
//     "blue",
//     "yellow"
// ]
//
// button.onclick = () =>{
//     let randNumb = Math.floor(Math.random()*4)
//     console.log(randNumb)
//     color.map ((x,index) =>{
//         if(randNumb === index)
//             button.style.backgroundColor = `${x}`
//         })
// }

//Uzduotis6

const button = document.querySelector("button")


button.onclick = () => {
    const red = `${Math.floor(Math.random() * 255)}`
    const green = `${Math.floor(Math.random() * 255)}`
    const blue = `${Math.floor(Math.random() * 255)}`
    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
