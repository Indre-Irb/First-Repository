localStorage.setItem(`first`, `hello`)
//Pirmas argumentas yra pavadinimas, antras - value

//Pasiimti
const num = localStorage.getItem("first")


//Uzduotis
localStorage.setItem(`name`, `My name is Indre`)
localStorage.setItem(`city`, `I'm living in Vilnius`)
localStorage.setItem(`day`, `Today is Monday`)

const name = localStorage.getItem("name")
const city = localStorage.getItem("city")
const day = localStorage.getItem("day")

//Uzduotis

const shop = document.querySelector(".shop")
const inv = document.querySelector(".inventory")
const btn = document.querySelector("button")
const point = document.getElementById("point")

const icons = [
    "fas fa-trailer",
    "fas fa-taxi",
    "fas fa-shuttle-van",
    "fas fa-motorcycle",
    "fas fa-truck-pickup",
    "fas fa-truck-monster",
    "fas fa-truck",
    "fas fa-caravan",
    "fas fa-ambulance",
    "fas fa-bus",
    "fas fa-car"
]

let selected = []
let counter = 200
let price = []



function appendIcon (arr) {
    const randomPrice = Math.floor(Math.random() * 80)+20

    arr.map(x => {
        shop.innerHTML += `<i class="${x}">
<div class="price">Cost: ${randomPrice}</div>
</i>`
    })
}
appendIcon(icons)

for (let i = 0; i < icons.length; i++) {

}
console.log(price)




    const icon = document.querySelectorAll("i")


    icon.forEach((x, index) => {
        x.onclick = () => {
            btn.onclick = () => {
                selected.push(index)
                shop.innerHTML = ""
                icons.forEach((y, ind) => {
                    if (ind !== index) {
                        shop.innerHTML += `<i class="${y}"><div>Cost: ${price}</div></i>`
                    }
                })
                inv.innerHTML = `<i class="${x.className}"><div>Cost: ${price}</div></i>`
                if (counter >= price) {
                    point.innerHTML = `${counter -= price}`
                }

            }
        }
    })







