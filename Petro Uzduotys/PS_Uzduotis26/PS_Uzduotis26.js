/*Uzduotis1*/

// const car = {
//     doors: 5,
//     color: "yellow",
//     brand: "Fiat"
// }
//
// console.log(car.color)

/*Uzduotis2*/

// const name = document.querySelector(".name")
// const surname = document.querySelector(".surname")
//     const form = document.querySelector("form")
//
//
// form.addEventListener ("submit", function (e){
//     e.preventDefault()
//
//     const typedName = name.value
//     const typedSurname = surname.value
//
//     const person = {
//         name: typedName,
//         surname: typedSurname
//     }
// })

/*Uzduotis3*/

// const name = document.querySelector(".name")
// const age = document.querySelector(".age")
// const form = document.querySelector("form")
//
// form.addEventListener("submit", e => {
//     e.preventDefault()
//     const typedName = name.value
//     const typedAge = age.value
//     let isLegal = true
//
//     if (typedAge < 18){
//         isLegal = false
//     }
//
//     const about = {
//         name: typedName,
//         age: isLegal
//     }
//
//     console.log(about)
// })

//Uzduotis4 (11paskaita)

const box = document.createElement("div")
const box2 = document.createElement("div")
const photo = document.createElement("img")
const name = document.createElement("h2")
const occupation = document.createElement("h5")


box.style.background = "green";
box.style.width = `300px`;
box.style.height = `200px`;
box.style.padding = `50px`;


document.body.append(box)

box2.style.background = "white";
box2.style.width = `300px`;
box2.style.height = `200px`;


photo.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSoQLn8t4J8qK3Hxf7HZoCt8o4bbPXbdypA&usqp=CAU")
photo.setAttribute ("width", "100")
photo.setAttribute ("height", "auto")
photo.style.borderRadius = `50%`
photo.style.margin = `-20px 100px`;

box.append(box2)
box2.append(photo)

name.textContent = `Rozine Pantera`
name.style.textAlign = `center`;

box2.append(name)

occupation.textContent = `Very secret agent`;
occupation.style.textAlign = `center`;

box2.append(occupation)