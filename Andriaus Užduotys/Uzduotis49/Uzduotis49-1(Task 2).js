const box = document.querySelector(".box")

let updatingPost = null
let allPosts = []

function deletePost(e) {
    const deletePost = {
        id: e.path[1].children[0].id,
        secretKey: localStorage.getItem('secret')
    }

    const options = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(deletePost)
    }

    fetch("http://167.99.138.67:1111/deletepost", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success) {
                window.location.reload()
            }
        })
}

function initUpdate(e) {
    updatingPost = e.path[1].children[0].id

    const currentPost = allPosts.find(x => x.id === updatingPost)

    postTitle.value = currentPost.image
    postImage.value = currentPost.title
    postDescription.value = currentPost.description
}


function getUserPosts(e) {
    const name = e.target.innerHTML
    createPosts("http://167.99.138.67:1111/getuserposts/" + name, false)
}

function getSinglePost(e) {
    const {id, className} = e.target
    createPosts(`http://167.99.138.67:1111/getsinglepost/${className}/${id}`, true)
}


function appendCard(arr) {
    const myName = localStorage.getItem("myName")
    box.innerHTML = ""
    arr.map(x => {
        let updateButton = ""
        let deleteButton = ""

        if (x.username === myName){
            updateButton = "<button class='updateButton'>Update</button>"
            deleteButton = "<button class='deleteButton'>Delete</button>"
        }

        const date = new Date(x.timestamp)
        const month = date.getMonth()
        const day = date.getDay()
        const year = date.getFullYear()
        box.innerHTML += `<div class="card">      
<!--              // <img id="${x.id}" class="${x.username}" src="${x.image}" alt="">              -->
                            <div class="userName">${x.username}</div>
                            <h4>${x.title}</h4>
                            <p>${x.description}</p>
                            <h5>${month}-${day}-${year}</h5>
                            ${updateButton}
                            ${deleteButton}
                          </div>`


    })
    console.log(arr)


    const names = document.querySelectorAll('.userName')
    names.forEach(x => x.onclick = getUserPosts)

    const images = document.querySelectorAll('img')
    images.forEach(x => x.onclick = getSinglePost)

    const updateButtons = document.querySelectorAll('.update')
    updateButtons.forEach(x => x.onclick = initUpdate)

    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(x => x.onclick = deletePost)

}


function createPosts(url, formatToArray) {
    fetch(url)
        .then(res => res.json())
        .then(info => {
            allPosts = info.data
            if (formatToArray) {
                return appendCard([info.data])
            }
            appendCard(info.data)
            // getMyPost(info.data)
        })
}

createPosts("http://167.99.138.67:1111/getallposts", false)


// to create account send POST request to '/createaccount'
// you should send object with these keys: name, passwordOne, passwordTwo
// check validations messages which you get from server
// make validations in front end according to it

const button3 = document.querySelector(".button3")
const postTitle = document.getElementById("postTitle")
const postDescription = document.getElementById("postDescription")
const postImage = document.getElementById("postImage")
const container2 = document.querySelector(".container2")
const card = document.querySelectorAll(".card")

let myPost = []

button3.onclick = () => {

    const writePost = {
        secretKey: localStorage.getItem("secretKey"),
        title: postTitle.value,
        image: postImage.value,
        description: postDescription.value
    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(writePost)
    }

    fetch("http://167.99.138.67:1111/createpost", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(writePost)
            if (data.success) {
                container2.innerHTML += `<h4>${data.message}</h4>`
            } else {
                container2.innerHTML += `<h4>${data.message}</h4>`
            }
        })
}

let key = localStorage.getItem("secretKey")
console.log(key)

button4.onclick = () => {

    const editPost = {
        secretKey: key,
        title: postTitle,
        image: postImage,
        description: postDescription,

    }
    console.log(editPost)

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(editPost)
    }

    fetch("http://167.99.138.67:1111/updatepost", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(editPost.title)
            data.map (x =>{
            x.onclick = () => {
                console.log(x.title)
                postTitle.value = x.title
                postImage.value = x.image
                postDescription.value = x.description
            }
            })
            })
}


