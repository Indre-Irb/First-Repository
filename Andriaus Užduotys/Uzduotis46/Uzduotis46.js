const player = document.querySelector(".plr")
const computer = document.querySelector(".cmp")
const btn = document.querySelector("button")
const score = document.querySelectorAll("h4")
const result = document.querySelector("h3")


let pArr = []
let cArr = []

let selectItem = []
let pointsForWin = 0
let pointsForLost = 0

let icons = [
    "far fa-hand-rock",
    "far fa-hand-scissors",
    "far fa-hand-paper",
]

icons.map((x, ind) => {
    player.innerHTML += `<i class="userIcon ${x}" ></i>`
    pArr.push(ind)
    computer.innerHTML += `<i class="comIcon ${x}" ></i>`
    cArr.push(ind)
})

const iconElement = document.querySelectorAll(".userIcon")
const compIcon = document.querySelectorAll(".comIcon")

iconElement.forEach((choice, ind) => {
    choice.onclick = () => {
        iconElement.forEach(x => x.style.border =  `1px solid black`)
        iconElement[ind].style.border = `2px solid #213a94`
        selectItem = []
        selectItem.push(ind)
    }
})

    btn.onclick = () => {
        let randIcon = Math.floor(Math.random() * 3)
        compIcon.forEach(x => x.style.border =  `1px solid black`)
        compIcon[randIcon].style.border = `2px solid #213a94`
        console.log(randIcon, "random")
        if (Number(selectItem) === 0 && randIcon === 1 || Number(selectItem) === 1 && randIcon === 2 || Number(selectItem) === 2 && randIcon === 0) {
            score[0].innerHTML = `Score: ${pointsForWin += 5}`
            result.innerHTML = `I Win`
        } else if (Number(selectItem) === 0 && randIcon === 2 || Number(selectItem) === 1 && randIcon === 0 || Number(selectItem) === 2 && randIcon === 1) {
           score[1].innerHTML = `Score: ${pointsForLost += 5}`
            result.innerHTML = `I Lost`
        } else {
            result.innerHTML = `Do it Again`
        }
    }
