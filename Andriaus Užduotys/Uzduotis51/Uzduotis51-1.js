const backButton = document.querySelector(".backButton")
const cart = document.querySelector(".cart")
const sum = document.querySelector(".total")

let totalSum = 0

backButton.onclick = () => {
    window.location.href = "Uzduotis51.html"
}

function removeProduct() {
    const removeButton = document.querySelectorAll(".removeButton")
    removeButton.forEach ((x, index )=> {
        x.onclick = (e) => {
            let price = e.path[1].childNodes[5].innerText.replace("Price: ", "")
            price = Number(price).toFixed(2)
            totalSum -= price
            totalSum = Number(totalSum).toFixed(2)
            sum.innerHTML = `<div class="position">Total price ${totalSum}</div>`
            console.log(totalSum)
            e.path[1].remove()

        }
    })

}



function shoppingCart() {
    const allProducts = JSON.parse(localStorage.getItem("products"))
    const boughtProduct = JSON.parse(localStorage.getItem("productId"))
    allProducts.map(x => {
        boughtProduct.map(y => {
            if (x.id === y) {
                totalSum = totalSum + x.price
                console.log(totalSum)
                sum.innerHTML = `<div class="position">Total price ${totalSum}</div>`
                cart.innerHTML += `<div class="boughtCard">
                            <div class="imgStyle2">
                           <img src="${x.image}" alt="">
                            </div>
                            <h5>${x.title}</h5>
                            <h5>Price: ${x.price}</h5>
                            <button class="removeButton">Remove</button>
                            </div>`


            }

            })
        removeProduct()
        })

    }

shoppingCart()
