// On récupère l'objet cart en session
let cart = window.localStorage.getItem('cart')

console.log(cart)

const tableProducts = cart => {
    const cartTable = document.getElementById('cart-rows')
    
    for (const product of cart) {
        const productTr = document.createElement('tr')

        const productImageTd = document.createElement('td')
        const productImage = document.createElement('img')
        productImage.src = product.image
        productImageTd.appendChild(productImage)
        productTr.appendChild(productImageTd)

        cartTable.appendChild(productTr)
    }
}

if (cart === null) {
    const infoMessage = document.getElementById('info')
    infoMessage.innerHTML = 'Votre panier est vide'

    const orderForm = document.getElementById('orderForm')
    orderForm.style.display = 'none'
} else {
    cart = JSON.parse(cart)
    tableProducts(cart)
}




/*//Récupération du formulaire
let form = document.getElementById("myform");


form.onsubmit = function() {
    let username = document.getElementById("username")
    let usermail = document.getElementById("usermail")
    let phone = document.getElementById("phone")
    let adress = document.getElementById("adress")
    let code = document.getElementById("code")
    let city = document.getElementById("city")

    if (username.value && usermail.value && phone.value && adress.value && code.value && city.value) {
        
       
//Si les champs ne sont pas renseignés
    }else {
        alert("Veuillez saisir tous les champs");
    }

    
}*/



