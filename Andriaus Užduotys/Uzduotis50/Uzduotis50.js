const shop = document.querySelector(".shop")
const myMoney = document.getElementById("money")
const buyEggButton = document.querySelector("button")
const progress = document.querySelector(".progress")
const basket = document.querySelector(".basket")


let money = 300
const price = 100
let list = []
let counter = 0

const animal = [
    "fas fa-kiwi-bird",
    "fas fa-spider",
    "fas fa-dove",
    "fas fa-frog",
    "fas fa-fish",
]


function generateAnimal() {
    let singleAnimal = Math.round(Math.random() * animal.length)
    const myAnimal = animal[singleAnimal]
    console.log(list)
    let gender = list[counter].results[0].gender

    const getGender = gender === "male" ? "b-color2" : "b-color"

    const name = list[counter].results[0].name.first
    const animalPrice = Math.round((Math.random() * 100) + 50)

    basket.innerHTML += `<div class="animalBox ${getGender}">
                        <h4>Price:</h4>
                        <h4 class="priceOfAnimal">${animalPrice}</h4>
                            <i class="${myAnimal}"></i>
                            <div>${gender}</div>
                            <div>${name}</div>
                            <button class="sellButton">Sell</button>
                        </div>`
    getSellButton()
    counter++
}

function getSellButton() {
    const sellAnimal = document.querySelectorAll('.sellButton')
    const priceOfAnimal = document.querySelectorAll('.priceOfAnimal')
    const animalBox = document.querySelectorAll('.animalBox')

    sellAnimal.forEach((x ,index)=> {

        x.onclick = () => {
            console.log(index)
             money = `${Number(priceOfAnimal[index].innerHTML) + money}`
            myMoney.innerHTML =""
            myMoney.innerHTML +=  `${money}`
            animalBox[index].style.display = "none";
        }
    })

}



buyEggButton.onclick = () => {
    console.log("Yes")
    if (money >= price){
        money = money - price
    myMoney.innerHTML = `${money}`
    progress.innerHTML = `<div class="shop">
                            <h5>Wait when egg will hatch</h5>
                            <div class="egg mt-10">
                                     <i class="fas fa-egg"></i>
                            </div>
                            <div class="progressBar">
                            <div class="smallBar"></div>
                            </div>
                          </div>`
    } else {
        progress.innerHTML = `<h3>Not enough money</h3>`
    }

    const smallBox = document.querySelector(".smallBar")

//Adding Event listeners
    smallBox.addEventListener('animationend', msAnimationEnd);

//Fired when animation ends
    function msAnimationEnd() {
        basket.style.display = "flex";
        generateAnimal()
    }


    fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            list.push(data)

        })
}
