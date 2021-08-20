// On récupère l'objet cart en session
let cart = JSON.parse(window.localStorage.getItem('cart'))

console.log(cart)

const tableProducts = cart => {
    const cartTable = document.getElementById('cart-rows')

    for (const product of cart) {
        
        const productTr = document.createElement('tr')

        const productImageTd = document.createElement('td')

        const imageProduct = document.createElement('img')
        imageProduct.src = product.image
        imageProduct.classList.add('image')
        productImageTd.appendChild(imageProduct)
        productTr.appendChild(productImageTd)

        const productNameTd = document.createElement('td')
        const nameProduct = document.createElement('h3')
        nameProduct.innerHTML = product.name
        nameProduct.classList.add('name')
        productNameTd.appendChild(nameProduct)
        productTr.appendChild(productNameTd)

        const productPriceTd = document.createElement('td')
        const priceProduct = document.createElement('p')
        priceProduct.innerHTML = product.price
        priceProduct.classList.add('price')
        productPriceTd.appendChild(priceProduct)
        productTr.appendChild(productPriceTd)





        cartTable.appendChild(productTr)
    }
}

if (cart === null) {
    const infoMessage = document.getElementById('info')
    infoMessage.innerHTML = 'Votre panier est vide'

    const orderForm = document.getElementById('orderForm')
    orderForm.style.display = 'none' //Le formulaire de commande n'apparaît pas si le panier est vide
    const thead = document.getElementById('thead')
    thead.style.display = 'none' //Lorsque le panier est vide, le tableau qui affiche les produits n'apparaît pas
} else {
    cart = JSON.parse(JSON.stringify(cart))
    tableProducts('cart')
}





    
    

    

        
        



        
    
    
    












    
      /*// on récupère la valeur des champs saisis par le user
       
      let username = document.getElementById('username').value
      let usermail = document.getElementById('usermail').value
      let phone = document.getElementById('phone').value
      let adress = document.getElementById('adress').value
      let code = document.getElementById('code').value
      let city = document.getElementById('city').value*/
