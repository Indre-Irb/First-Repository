const generate = document.querySelector(".generator")
const main = document.querySelector(".main")

generate.onclick = () => {
    let randNum = Math.round(Math.random()*10)
    main.innerHTML = `${randNum}`
}

