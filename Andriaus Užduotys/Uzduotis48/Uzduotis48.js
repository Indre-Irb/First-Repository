const player = document.querySelector(".player")
const enemy = document.querySelector(".enemy")
const btn = document.querySelector("button")
const weapon = document.querySelector(".weapon")
const potion = document.querySelector(".potion")
const money = document.getElementById("money")

let plostPoints = 1
let clostPoints = 0
let enemyHp = 100
let playerFullHp = 100
let coins = 0

let enemies = [
    {
        name: "Goblin",
        img: "https://i.imgur.com/yBh7Fn4.png",
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
        maxDamage: 15
    }
]

let weapons = [{
    sword: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
        damage: 10,
        effect: 'gives player 25% chance to doge enemy attacks'
    },
    magicWand: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
        damage: 12,
        effect: 'heals player on every enemy hit from 0 to 5 hit points'
    },
    bow: {
        img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
        damage: 7,
        effect: 'has a 50% chance to hit enemy two times in a row'
    },
    potion: {
        img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
        info: "can be bought from shop for 50 coins, recovers player health when bought",
    }
}]

function createEnemies() {
    enemies.map(card => {
        enemy.innerHTML = `<div>${card.name}</div>
                           <img src="${card.img}" alt="">
                           <div class="hp"></div>
                           <div class="points">Enemy Hp: ${enemyHp}</div>`
    })
}

createEnemies()

function createWeapon() {
    weapons.map(box => {
        weapon.innerHTML = `<img class="sword" src="${box.sword.img}" alt="">
                            <img class="wand" src="${box.magicWand.img}" alt="">
                            <img class="bow" src="${box.bow.img}" alt="">`
        potion.innerHTML = `<img class="healer" src="${box.potion.img}" alt="">`
    })
}

createWeapon()


const hp = document.querySelectorAll(".hp")
let points = document.querySelectorAll(".points")

btn.onclick = () => {

    if (enemyHp >= 0) {
        enemyHp -= clostPoints
        points[1].innerHTML = `<div>Enemy Hp: ${enemyHp}</div>`
    }

    if (playerFullHp >= 0) {
        playerFullHp -= plostPoints
        points[0].innerHTML = `<div>Player Hp: ${playerFullHp}</div>`
    }

    if (playerFullHp <= plostPoints) {
        points[0].innerHTML = `<div>"You Lost"</div>`
        btn.disabled = true;
    }
    updateHp()
    changeEnemy()
    money.innerHTML = `${coins = coins + Math.floor((Math.random() * 10) + 1)}`

}

function updateHp() {
    hp[1].style.width = `${enemyHp}%`;
    hp[0].style.width = `${playerFullHp}%`;

}

function changeEnemy() {
    if (enemyHp <= 0) {
        const randomEnemyIndex = Math.round(Math.random() * (enemies.length - 1))
        enemyHp = 100;
        console.log(randomEnemyIndex)
        if (randomEnemyIndex === 0){
            plostPoints = Math.floor((Math.random() * 12) + 1)
        } if (randomEnemyIndex === 1){
            plostPoints = Math.floor((Math.random() * 8) + 1)
        } if (randomEnemyIndex === 2) {
            plostPoints = Math.floor((Math.random() * 15) + 1)
        }
        enemy.innerHTML = `<div>${enemies[randomEnemyIndex].name}</div>
                           <img src="${enemies[randomEnemyIndex].img}" alt="">
                           <div class="hp"></div>
                           <div class="points" id="troll">Enemy Hp: ${enemyHp}</div>`
        points = document.querySelectorAll(".points")
        console.log(plostPoints, 'atskiro prišo taškai')

    }
}

const sword = document.querySelector(".sword")
const wand = document.querySelector(".wand")
const bow = document.querySelector(".bow")
const healer = document.querySelector(".potion")



    sword.onclick = () => {
    let num = Math.floor((Math.random() * 100) + 1)
    if (num <= 25) {
        clostPoints = Math.floor((Math.random() * 10) + 1)
        plostPoints = 0
    } else {
        clostPoints = Math.floor((Math.random() * 10) + 1)
    }
        console.log(num)
        console.log(plostPoints)
        console.log(clostPoints,"nuo kardo")

    }

    wand.onclick = () => {
        console.log("Wand")
        clostPoints = Math.floor((Math.random() * 12) + 1)
        plostPoints+= Math.floor((Math.random() * 5) + 1)
    }

    bow.onclick = () => {
        console.log("Bow")
        clostPoints = Math.floor((Math.random() * 7) + 1)
        // clostPoints = Math.floor((Math.random() * 20) + 1) // has a 50% chance to hit enemy two times in a row
    }

    healer.onclick = () => {
        if (coins >= 50) {
            playerFullHp = 100
            money.innerHTML = `${coins -= 50}`
            points[0].innerHTML = `Player Hp: ${playerFullHp}`

            updateHp()
        }

    }




