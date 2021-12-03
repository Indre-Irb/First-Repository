//8 paskaita
// 1 užduotis
// function wordFromLetter (num){
//     if (num > 0)
//         console.log(`n`.String.fromCharCode(76))
// }
//
// wordFromLetter(4)

// 2 Užduotis

// 3 Užduotis

// const blurEvent = document.querySelector("input")
// const div = document.querySelector("div")
//
//
// blurEvent.addEventListener(`blur`, (event) => {
//     console.log(event)
//     div.innerHTML += `${event.path[0].value}, `
// });

//4 užduotis

// const inputs = document.querySelectorAll("input")
// const form = document.querySelector("form")
//
//
// function numbers(event) {
//     event.preventDefault()
//     let num1 = inputs[0].value
//     let num2 = inputs[1].value
//     if (100 - num1 < 100 - num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
//
// form.addEventListener('submit', numbers);

// 5 užduotis

const generateNum = document.querySelector(".generate")
const div = document.querySelector("div")
const input = document.querySelector("input")


let randNumb = Math.round(Math.random() * 5)
let counter = 1
console.log(randNumb)

input.onchange = () => {

    if (Number(input.value) === randNumb) {
        console.log("Yes")
        div.innerHTML = `<h4>You guessed right from ${counter} time</h4>`
    } else {
        console.log("No")
        counter++
    }

}




