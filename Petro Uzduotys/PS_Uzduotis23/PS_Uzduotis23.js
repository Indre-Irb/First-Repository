// const text = document.querySelector("h1")
// const button = document.querySelector("button")
// const inp = document.querySelector("input")
//
// let bonus = 0
//
// button.addEventListener("click", addBonus)
//
// function addBonus() {
//     text.innerText = `Jūsų bonusas: ${bonus + 50}`
//     if (inp.value >= 10) {
//         text.innerText = `Jūsų bonusas: ${bonus + 100}`
//     }
//     if (inp.value >= 20) {
//         text.innerText = `Jūsų bonusas: ${bonus + 200}`
//     }
// }


// Užduotis 2

// const text = document.querySelector("h1")
// const button = document.querySelector("button")
// const inp = document.querySelector("input")
// const field = document.querySelector("form")
//
//
//
// field.addEventListener("click", year)
//
// function year (event){
//     event.preventDefault();
//     if (Number.isInteger(inp.value / 4) && Number.isInteger(inp.value / 100) && Number.isInteger(inp.value / 400)){
//         text.innerText = "Yes"
//     } else {
//         text.innerText = "No"
//     }
// }


// //Užduotis 3
// const text = document.querySelector("h1")
// const button = document.querySelector("button")
// const inp = document.querySelector("input")
//
// button.addEventListener("click", count)
//
// function count () {
//     let result = inp.value * 1.8 + 32
//     text.innerText = result;
// }

//Užduotis 4

// const inp1 = document.querySelector("#inp1")
// const inp2 = document.querySelector("#inp2")
// const text = document.querySelector("h1")
// const button = document.querySelector("button")
//
// button.addEventListener("click", agree)
//
// function agree() {
//     if (inp2.checked) {
//         text.innerText = `El. paštas ${inp1.value} sėkmingai užregistruotas`
//     } else {
//         text.innerText = `Registracija nesėkminga`
//     }
// }

//Uzduotis5

// const inp1 = document.querySelector(".inp1")
// const inp2 = document.querySelector(".inp2")
// const list = document.querySelector('ul')
// const btn = document.querySelector("button")
//
//
//     btn.onclick = () => {
//     for (let i = 0; i < inp2.value; i++) {
//         list.innerHTML += `<li>${inp1.value}</li>`
//     }
// }

//Uzduotis6
const inp = document.querySelector("input")
const result = document.querySelector("div")
const btn = document.querySelector("button")

btn.onclick = () => {
let txt = ""
    for (let i = 0; i < inp.value; i++) {
        result.innerHTML += `${txt+="*"}<br>`

    }
}

