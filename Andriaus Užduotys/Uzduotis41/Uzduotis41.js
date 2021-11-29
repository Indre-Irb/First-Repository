const button = document.querySelector(".btn")
const text = document.getElementById("num")

const main1 = document.querySelector(".main1")
const main2 = document.querySelector(".main2")
const main3 = document.querySelector(".main3")

const mainButton = document.querySelector(".mbutton")
const shopButton = document.querySelector(".btn1")
const backButton = document.querySelector(".btn2")
const upgrade = document.querySelectorAll(".upgrade")

let counter = 1000
let pointsToAdd = 1


function autoCount (){
    counter += pointsToAdd
}

button.onclick = () => {
    text.innerText = counter += pointsToAdd
}

mainButton.onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
}

shopButton.onclick = () => {
    main1.style.display = "none";
    main2.style.display = "none";
    main3.style.display = "flex";
}

backButton.onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
}

upgrade[0].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 100) {
        counter -= 100;
        pointsToAdd = 2;
    }
}
upgrade[1].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 500) {
        counter -= 500;
        pointsToAdd = 5;
    }
}
upgrade[2].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 1000) {
        counter -= 1000;
        pointsToAdd = 10;
    }
}
upgrade[3].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 300) {
        counter -= 300;
        main2.style.backgroundColor = "#f18686";
    }
}
upgrade[4].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 200) {
        counter -= 200;
        button.src = "https://www.pngkey.com/png/detail/31-314570_triple-chocolate-chunk-transparent-background-png-cookies.png";

    }
}
upgrade[5].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 400) {
        counter -= 400;
        button.classList.add("spiner")
    }
}
upgrade[6].onclick = () => {
    main1.style.display = "none";
    main2.style.display = "flex";
    main3.style.display = "none";
    if (counter >= 600) {
        counter -= 600;
        pointsToAdd = setInterval(button.onclick, 1000)
    }
}









