// fetch("https://api.chucknorris.io/jokes/random")
//     .then (res => res.json())
//     .then(data => {
//     console.log(data)})

//res ir data gali būti sugalvoti pavadinimai

// const box = document.querySelector(".box")
//
// fetch("https://api.chucknorris.io/jokes/random")
//     .then (res => res.json())
//     .then(data => {
//         box.innerHTML += `<img src="${data.icon_url}" alt="">`
//         box.innerHTML += `<a href="${data.url}">Joke link</a>`
//         box.innerHTML += `${data.value}`
//     })

//Uzduotis2

const btn = document.querySelector("button")
const box = document.querySelector(".box")


let userList = []
let color = -1

function createUserList() {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            userList.push(data)

            makeCard()
        })

}

function makeCard() {
    box.innerHTML = ""
    userList.map((user, index) => {
        let age = Number(`${user.results[0].dob.age}`)
        console.log(age)

        const getOld = age > 30 ? "bcolor" : ""

        box.innerHTML += `<div class="card ${getOld}">
                              <img src="${user.results[0].picture.medium}" alt="">
                              <div>${user.results[0].name.first} ${user.results[0].name.last}</div>
                              <div>${user.results[0].email}</div>
                              <div>${user.results[0].location.city} ${user.results[0].location.state} ${user.results[0].location.postcode}</div>
                              <div>${user.results[0].phone}</div>
                              <div class="cardButton" id="${index}">Delete User</div>
                              </div>`
        getDeleteButton()

    })
}

btn.onclick = () => {
    createUserList()
}


function getDeleteButton() {
    const deleteUser = document.querySelectorAll('.cardButton')

    deleteUser.forEach(x => {
        x.onclick = toDelete
    })
}


function toDelete (event) {
    console.log(event)
    const {id} = event.target
    userList = userList.filter ((x,index) => index !== Number(id))
makeCard()
}


