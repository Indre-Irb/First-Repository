// Uzd 1

// consttimes  = 0;
// let combo = "Indre"
//
// while (consttimes < 5) {
//     console.log(consttimes,combo+="Indre")
//     consttimes++;
//
// }


//Uzd 2

// number = Math.cos(0)
// console.log(number)
//
// const random1 = Math.floor(Math.random() * 5) + 1;
// console.log(random1)
//
// const random2 = Math.floor(Math.random() * (13-5)) + 5;
// console.log(random2)
//
// let random3 = Math.floor(Math.random() * 5) + 1;
// if (random3 < 2) {
//     console.log("Laimingas")
// } else {
//     console.log("Nelaimingas")
// }
// let random4 = Math.floor(Math.random() * 15) + 1;
// switch (random4){
//     case  1:
//     console.log("Automobilis");
//         break;
//     case 2:
//         console.log("Televizorius");
//         break;
//     case 3:
//         console.log("Televizorius");
//         break;
//     case 4:
//         console.log("Televizorius");
//         break;
//     case 5:
//         console.log("2 Eurus");
//         break;
//     case 6:
//         console.log("2 Eurus");
//         break;
//     case 7:
//         console.log("2 Eurus");
//         break;
//     case 8:
//         console.log("2 Eurus");
//         break;
//     case 9:
//         console.log("2 Eurus");
//         break;
//     case 10:
//         console.log("Nelaimingas");
//         break;
//     case 11:
//         console.log("Nelaimingas");
//         break;
//     case 12:
//         console.log("Nelaimingas");
//         break;
//     case 13:
//         console.log("Nelaimingas");
//         break;
//     case 14:
//         console.log("Nelaimingas");
//         break;
//     case 15:
//         console.log("Nelaimingas");
//         break;
// }

//Uzd 3

// document.body.innerHTML = "<h2>Indre</h2>"
// document.getElementById("name").textContent = "Indre"
//
// document.getElementsByTagName('UL')[0].getElementsByTagName("LI")[2].innerHTML = "Suris"

//Uzd 4

document.querySelector("p.bluetext span").textContent = "blue";

 let myList = document.getElementsByTagName("ol")[0];
 temp = myList.getElementsByTagName("li")[0].innerHTML;
myList.getElementsByTagName("li")[0].innerHTML = myList.getElementsByTagName("li")[1].innerHTML;
myList.getElementsByTagName("li")[1].innerHTML = temp

console.log(myList)


