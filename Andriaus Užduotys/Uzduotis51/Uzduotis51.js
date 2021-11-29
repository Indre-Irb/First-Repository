const store = document.querySelector(".store")
const cartCounter = document.querySelector(".cartCounter")
const cartButton = document.querySelector(".cartButton")

let counter = 1
let list = []
let bought = []


cartButton.onclick = () => {
    window.location.href = "Uzduotis51-1.html"

}


function buyProduct (){
    const buyButton = document.querySelectorAll(".buyButton")
    buyButton.forEach ((x, index) => {
        x.onclick = () => {
            bought.push(index+1)
            localStorage.setItem("productId", JSON.stringify(bought))
            cartCounter.innerHTML = counter++
    }
    })
}


function addProducts(arr) {
    arr.map(x => {
        store.innerHTML += `<div class="productCard">
                            <div class="imgStyle">
                           <img src="${x.image}" alt="">
                            </div>
                            <h3>${x.title}</h3>
                            <p>${x.description}</p>
                            <h4>Price: ${x.price}</h4>
                            <button class="buyButton">Add to Cart</button>
                            </div>`
    })
    buyProduct ()
}


function getAllCartItems() {
    let localProducts = localStorage.getItem('products');
    if (localProducts !== undefined && localProducts !== null) {
        list = JSON.parse(localProducts);
        addProducts(list);
    }
    else {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                data.forEach(el => {
                    list.push(el)
                })
                localStorage.setItem("products", JSON.stringify(list));
                addProducts(list)
            })
    }
}
getAllCartItems()
