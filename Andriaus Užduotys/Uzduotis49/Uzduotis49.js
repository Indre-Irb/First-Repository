// const box = document.querySelector(".box")
// const box1 = document.querySelector(".box1")
// const box2 = document.querySelector(".box2")
// const button = document.querySelector("button")
//
// let list = []
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.map((x, index) => {
//             list.push(x)
//             box.innerHTML += `<div class="card" id="${index}">
//                               <div class="title">${x.title}</div>
//                               <div>${x.body}</div>
//                               </div>`
//         })
//         clickCard()
//     })
//
// function postComment () {
//     let commentId = localStorage.getItem('id')
//     console.log(commentId)
//     fetch('https://jsonplaceholder.typicode.com/posts' + "/" + `${commentId}` + "/comments")
//         .then(res => res.json())
//         .then(data => {
//             data.map((x,index) => {
//             box2.innerHTML += `<div class="card3" id="${index}">
//                                <div class="title">${x.name}</div>
//                               <div>${x.body}</div>
//                               </div>`
//             })
//         })
// }
//
// postComment()
//
// console.log(list)
//
// function clickCard() {
//     const card = document.querySelectorAll(".card")
//     console.log(card)
//     card.forEach((x, index) => {
//         x.onclick = () => {
//             let cardId = list[index].id
//             localStorage.setItem('id', cardId)
//             window.location.href = `Uzduotis49-1.html`
//         }
//     })
// }
//
// function cardInfo() {
//     let moreInfo = localStorage.getItem('id')
//     fetch('https://jsonplaceholder.typicode.com/posts' + "/" + `${moreInfo}`)
//         .then(res => res.json())
//         .then(data => {
//             box1.innerHTML += `<div class="card" id="${moreInfo}">
//                                <div class="title">${data.title}</div>
//                               <div>${data.body}</div>
//                               </div>`
//         })
// }
//     cardInfo()
//
//     button.onclick = () => {
//         window.location.href = `Uzduotis49-2.html`
//     }

//Uzduotis II

const input1 = document.getElementById("name")
const input2 = document.getElementById("One")
const input3 = document.getElementById("Two")
const nameInput = document.getElementById("loginName")
const passInput = document.getElementById("loginPassword")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")

const container = document.querySelector(".container")
const container1 = document.querySelector(".container1")

button1.onclick = () => {
    const user = {
        name: input1.value,
        passwordOne: input2.value,
        passwordTwo: input3.value,

    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }


    fetch("http://167.99.138.67:1111/createaccount", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (user.name.length >= 5 && user.passwordTwo === user.passwordTwo) {
                container.innerHTML += `<h4>${data.message}</h4>`
            } else {
                container.innerHTML += `<h4>${data.message}</h4>`
            }
        })

}
const host = "http://167.99.138.67:1111"




button2.onclick = () => {

    const loginUser = {
        name: nameInput.value,
        password: passInput.value,

    }
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loginUser)
    }

    fetch("http://167.99.138.67:1111/Login", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(loginUser.name)
            if (data.success) {
                localStorage.setItem("secretKey", data.secretKey)
                localStorage.setItem("myName", loginUser.name)
                console.log(key)
                container1.innerHTML += `<h4>${data.message}</h4>`
            } else {
                container1.innerHTML += `<h4>${data.message}</h4>`
            }
        })
    // window.location.href = `Uzduotis49-1(Task 2).html`
}




