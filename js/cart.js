// On récupère l'objet cart en session
let cart = JSON.parse(window.localStorage.getItem('cart'))

console.log(window.localStorage.getItem('cart'))

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
        priceProduct.innerHTML = product.price/100 + "€"
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
    tableProducts(cart)
}


//////////BOUTON VIDER LE PANIER//////////

//Sélection du bouton vider le panier
const clear_cart = document.querySelector(".clear_cart");


//Suppression de la key cart dans le local storage pour vider entièrement le panier
clear_cart.addEventListener('click', (e) => {
    e.preventDefault;

    //removeItem pour vider le local storage
    localStorage.removeItem('cart');

    //alert le panier a été vidé
    alert('Votre panier va être vidé');

    //rechargement de la page panier
    window.location.href = 'cart.html';
});

//////////FIN//////////



//////////BOUTON CONFIRMATION DE LA COMMANDE//////////
//Sélection du bouton vider le panier
const submit = document.querySelector(".submit");


//Suppression de la key cart dans le local storage pour vider entièrement le panier
submit.addEventListener('click', (e) => {
    e.preventDefault;

    //alert le panier a été vidé
    alert('Votre commande est validée. Vous allez être redirigé vers la page de confirmation');

    //rechargement de la page panier
    window.location.href = 'confirmation.html';
});

//////////FIN//////////






        
    
    
    
    
    
    
    
    
    
    
    
    //////////PARTIE FORMULAIRE//////////

//On déclare un tableau de produits pour la requête POST
let productsTable = []

const idProducts = (productsTable) => {

    let cart = JSON.parse(localStorage.getItem('cart'))

    productsTable = Object.values(cart).map( (data) => {
        let qt = parseInt(data.qte)
        console.log(typeof qt)
        console.log(qt)

        for (let i = 0 ; i< qt ; i++) {
            productsTable.push(data._id)
        }
        console.log(productsTable)
        return productsTable
    })
}

idProducts(productsTable)





   // on récupère la valeur des champs saisis par l'utilisateur
       
      let username = document.getElementById('username').value
      let usermail = document.getElementById('usermail').value
      let phone = document.getElementById('phone').value
      let adress = document.getElementById('adress').value
      let code = document.getElementById('code').value
      let city = document.getElementById('city').value



      // on met les valeurs dans un objet pour la requête POST
    let contact = {
        "lastName": username,
        "firstName": username,
        "email": usermail,
        "phone": phone,
        "address": adress,
        "code": code,
        "city": city,
    }

// création de l'objet obligatoire pour la requête à envoyer au serveur
  let objet = {
    contact,
    productsTable
  }

  let achat = JSON.stringify(objet)
  if (username == ''){
    alert("Prénom incorrect")

  } else if (username == ''){
    alert("Nom incorrect")
  } else if (usermail == ''){
    alert("Email incorrect")
  } else if (adress == ''){
    alert("Adresse incorrect")
  } else if (city == ''){
    alert("Ville incorrect")
   
 // console.log(achat);
 // console.log(products);
  
  
  // si tout à été bien rempli, on envoi la commande au serveur, avec toutes les coordonnées du client
  } else {
  let request = new XMLHttpRequest()
       request.onreadystatechange = function () {
         if (this.readyState == XMLHttpRequest.DONE) {
           let confirmation = JSON.parse(this.responseText)
           sessionStorage.setItem('order', JSON.stringify(confirmation))
           let prix = JSON.parse(sessionStorage.getItem('prixTotal'))
           sessionStorage.setItem('prix', JSON.stringify(price))
          console.log(typeof prix)
          console.log( prix)
           //une fois la requête envoyée, on est redirigé sur la page de confirmation de commande
           window.location.href = "confirmation.html"
         }
       }
  request.open("post", "http://localhost:3000/api/furniture/order")
  request.setRequestHeader("Content-Type", "application/json")
  request.send(achat)
      }


// je récupère l'id submit,  j'effectue la fonction achat pour pouvoir récupérer les données dans la page confirmation
let formValid = document.getElementById('submit')
formValid.addEventListener ('click', function (e) {
  achat(e)
})


    
  
  

  
