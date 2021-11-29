const sizeInputH = document.querySelectorAll(".inputs")[0]
const sizeInputW = document.querySelectorAll(".inputs")[1]
const redButton = document.querySelector(".red")
const greenButton = document.querySelector(".green")
const blueButton = document.querySelector(".blue")
const purpleButton = document.querySelector(".purple")
const borderInputSize = document.querySelectorAll(".inputs")[2]
const borderInputType = document.querySelectorAll(".inputs")[3]
const borderInputColor = document.querySelectorAll(".inputs")[4]
const borderRadiusInput = document.querySelectorAll(".inputs")[5]
const paddingInput = document.querySelectorAll(".inputs")[6]
const marginInputT = document.querySelectorAll(".inputs")[7]
const marginInputR = document.querySelectorAll(".inputs")[8]
const marginInputB = document.querySelectorAll(".inputs")[9]
const marginInputL = document.querySelectorAll(".inputs")[10]
const generateButton = document.querySelectorAll(".generateButton")[0]


const generator2 = document.querySelector(".generator2")
const textGenerateButton = document.querySelectorAll(".generateButton")[1]

const categoryText = document.querySelectorAll(".inputs2")[0]
const subCategoryText = document.querySelectorAll(".inputs2")[1]

const error = document.querySelector(".error")

const addCardButton = document.querySelector(".addButton")
const cardField = document.querySelector(".cardField")


generator2.innerHTML = `<div class="card"></div>`

let card = document.querySelector(".card")
let color = ""

addCardButton.onclick = () => {
    cardField.appendChild(card)
    generator2.innerHTML = `<div class="card"></div>`
    card = document.querySelector(".card")
}


function styledCard() {
    card = document.querySelector(".card")
    card.style.height = `${sizeInputH.value}px`
    card.style.width = `${sizeInputW.value}px`
    card.style.border = `${borderInputSize.value}px ${borderInputType.value} ${borderInputColor.value}`
    card.style.borderRadius = `${borderRadiusInput.value}%`
    card.style.padding = `${paddingInput.value}px`
    card.style.margin = `${marginInputT.value}px ${marginInputR.value}px ${marginInputB.value}px ${marginInputL.value}px`
    card.style.background = `${color}`
}


generateButton.onclick = () => {
    styledCard()
}

redButton.onclick = () => {
    redButton.style.border = `1px solid black`
    greenButton.style.border = `none`
    blueButton.style.border = `none`
    purpleButton.style.border = `none`
    color = "#f67878"

}
greenButton.onclick = () => {
    redButton.style.border = `none`
    greenButton.style.border = `1px solid black`
    blueButton.style.border = `none`
    purpleButton.style.border = `none`
    color = "#7bf87b"

}
blueButton.onclick = () => {
    redButton.style.border = `none`
    greenButton.style.border = `none`
    blueButton.style.border = `1px solid black`
    purpleButton.style.border = `none`
    color = "rgba(121, 230, 234, 0.79)"
}
purpleButton.onclick = () => {
    redButton.style.border = `none`
    greenButton.style.border = `none`
    blueButton.style.border = `none`
    purpleButton.style.border = `1px solid black`
    color = "#ea6dea"
}

function getInformation() {
    fetch(`http://167.99.138.67:8281/random/${categoryText.value}/${subCategoryText.value}`)
        .then(res => res.json())
        .then(data => {
            if (data.success === true) {
                error.innerHTML = `<h2>Content generated successfully</h2>`
                if (data.item.includes(`https://`) || data.item.includes(`http://`)) {
                    console.log(data)
                    card.style.overflow = `hidden`
                    card.innerHTML += `<img src="${data.item}" alt="">`

                } else {
                    card.innerHTML += `<h6>${data.item}</h6>`
                }
            } else {
                error.innerHTML = `<h2>${data.message}</h2>`
            }
        })
}

textGenerateButton.onclick = () => {
    getInformation()
}