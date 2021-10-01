// On récupère l'objet cart en session
let cart = JSON.parse(window.localStorage.getItem('cart'))

console.log(window.localStorage.getItem('cart'))

const tableProducts = cart => {
    const cartTable = document.getElementById('cart-rows')

    for (const product of cart) {
        
        const productTr = document.createElement('tr')
        productTr.classList.add('trRow')

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

        const productClearTd = document.createElement('td')
        const clearProduct = document.createElement('button')
        const btn_clear = document.createTextNode("Supprimer l'article") //Nommer le bouton 
        clearProduct.appendChild(btn_clear);  //Ajouter le texte au bouton                             
        clearProduct.classList.add('clear_product')
        productClearTd.appendChild(clearProduct)
        productTr.appendChild(productClearTd)

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

    localStorage.removeItem('cart');  //removeItem pour vider le local storage

    alert('Votre panier va être vidé'); //alert le panier a été vidé

    window.location.href = 'cart.html'; //rechargement de la page panier

});
//////////FIN//////////


//////////BOUTON CONFIRMATION DE LA COMMANDE//////////
const orderForm = document.getElementById('orderForm'); //Sélection du bouton confirmer la commande

orderForm.addEventListener('submit', (e) => {  //Ajout d'un écouteur sur le click du bouton confirmation
    e.preventDefault;

    //Récupération des valeurs du formulaire
    const contact = {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value
    }

    //Mise en place dans le local storage du nom, prénom de l'utilisateur ainsi que le prix total
    localStorage.setItem('firstName', document.querySelector('#firstName').value)
    localStorage.setItem('lastName', document.querySelector('#lastName').value)
    localStorage.setItem('totalPrix', JSON.stringify(totalPrix))
    localStorage.setItem('commande', JSON.stringify(commande))
    
    const send = { // Création de l'objet pour la requête à envoyer au serveur
      cart,
      contact
    };
  
fetch("http://localhost:3000/api/furniture/order",
{
method: 'POST',
body:JSON.stringify(send)
})
.then(response => response.json())
.then(response => {
  if (Object.entries(response).length === 0) {
    localStorage.removeItem('cart'),
    window.location.href = 'confirmation.html'
  } else {
    createProduct(response)
  }
})
.catch(error => alert("Erreur : " + error));
      
  //alert, la commande est validée et l'utilisateur va être redirigé
    alert('Votre commande est validée. Vous allez être redirigé vers la page de confirmation');
});
//////////FIN//////////


//////////PRIX TOTAL//////////

let prixTotal = [];

for (let m = 0; m < cart.length; m++) {  //Aller chercher les prix dans le panier
  let prixProduit = cart[m].price/100;

  prixTotal.push(prixProduit)  //Mettre les prix du panier dans la variable prixTotal
  console.log(prixTotal)
}

//Additionner les prix dans le tableau de la variable prixTotal
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrix = prixTotal.reduce(reducer, 0);

//Déclaration de la variable pour pouvoir y mettre les prix qui sont présents dans le panier
const totalPrice = document.getElementById('total_price').innerHTML = "Prix total :" + totalPrix + "€";
  
//////////FIN//////////


//////////Id produit//////////
let commande = [];
for (let n = 0; n < cart.length; n++) {
  let commandeId = cart[n].id;

  commande.push(commandeId)
  console.log(commande)
}

//////////Fin//////////

//////////BOUTON SUPPRIMER ARTICLE//////////
const clear_product = document.querySelector(".clear_product");

clear_product.addEventListener('click', (e) => {
  e.preventDefault;

  const thead = document.getElementById('thead').deleteRow(-1) //Supprimer une ligne du tableau qui présente les articles page panier
  console.log(thead)
  
localStorage.removeItem('cart');  //removeItem pour vider le local storage
alert('Votre article va être supprimé')

})





//////////PARTIE FORMULAIRE//////////

let form = document.querySelector('#orderForm');

/////VALIDATION NOM/////

//Ecouter la modification du nom, action qu’on peut détecter car le système va nous informer qu’elle se produit 
form.firstName.addEventListener('change', function() {
  validUserName(this);
});

const validUserName = function(inputUserName) {
    //Création de la regexp pour la validation nom 
    let userNameRegExp = new RegExp (
        '^[a-zA-Z ,.-]+$', 'i'
    );

    let testName = userNameRegExp.test(inputUserName.value);
    console.log(testName)

  //Récupération de la balise small
  let small_name = inputUserName.nextElementSibling;

  //On teste l'expression régulière
if(testName) {
  small_name.innerHTML = 'Nom Valide';
  small_name.classList.remove('text-danger')
  small_name.classList.add('text-success');
} else {
  small_name.innerHTML = 'Nom non valide';
  small_name.classList.remove('text-success');
  small_name.classList.add('text-danger');
}
};


/////VALIDATION PRENOM/////

//Ecouter la modification du prénom, action qu’on peut détecter car le système va nous informer qu’elle se produit 
form.lastName.addEventListener('change', function() {
  validUserLastName(this);
});

const validUserLastName = function(inputUserLastName) {
    //Création de la regexp pour la validation prénom
    let userLastNameRegExp = new RegExp (
        '^[a-zA-Z ,.-]+$', 'i'
    );

    let testLastName = userLastNameRegExp.test(inputUserLastName.value);
    console.log(testLastName)

  //Récupération de la balise small
  let small_lastName = inputUserLastName.nextElementSibling;

  //On teste l'expression régulière
if(testLastName) {
  small_lastName.innerHTML = 'Prénom Valide';
  small_lastName.classList.remove('text-danger')
  small_lastName.classList.add('text-success');
} else {
  small_lastName.innerHTML = 'Prénom non valide';
  small_lastName.classList.remove('text-success');
  small_lastName.classList.add('text-danger');
}
};


/////VALIDATION EMAIL/////

//Ecouter la modification de l'email, action qu’on peut détecter car le système va nous informer qu’elle se produit 
form.email.addEventListener('change', function() {
  validUserMail(this);
});

const validUserMail = function(inputUserMail) {
//Creation de la reg exp pour validation email
let userMailRegExp = new RegExp (
  '^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g' 
);

let testMail = userMailRegExp.test(inputUserMail.value);
console.log(testMail)

//Récupération de la balise small
let small = inputUserMail.nextElementSibling;

  //On teste l'expression régulière
if(testMail) {
  small.innerHTML = 'Mail valide';
  small.classList.remove('text-danger')
  small.classList.add('text-success');
} else {
  small.innerHTML = 'Mail non valide';
  small.classList.remove('text-success');
  small.classList.add('text-danger');
}
};

  /////VALIDATION Adresse/////

//Ecouter la modification de l'adresse, action qu’on peut détecter car le système va nous informer qu’elle se produit 
form.address.addEventListener('change', function() {
    validAdress(this);
  });
  
  const validAdress = function(inputAdress) {
      //Création de la regexp pour la validation de l'adresse
      let adressRegExp = new RegExp (
        '^([1-9]?[0-9])|100(?:(?:[,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)*$', 
      );

      let testAdress = adressRegExp.test(inputAdress.value);
      
        console.log(testAdress)
      
    //Récupération de la balise small
    let small_adress = inputAdress.nextElementSibling;
  
    //On teste l'expression régulière
  if(testAdress) {
    small_adress.innerHTML = 'Adresse Valide';
    small_adress.classList.remove('text-danger')
    small_adress.classList.add('text-success');
  } else {
    small_adress.innerHTML = 'Adresse non valide';
    small_adress.classList.remove('text-success');
    small_adress.classList.add('text-danger');
  }
  };


  /////VALIDATION VILLE/////

//Ecouter la modification de la ville, action qu’on peut détecter car le système va nous informer qu’elle se produit 
form.city.addEventListener('change', function() {
    validCity(this);
  });
  
  const validCity = function(inputCity) {
      //Création de la regexp pour la validation de la ville
      let cityNameRegExp = new RegExp (
          '^[a-zA-Z ,.-]+$', 'i'
      );
  
      let testCity = cityNameRegExp.test(inputCity.value);
      console.log(testCity)
  
    //Récupération de la balise small
    let small_city = inputCity.nextElementSibling;
  
    //On teste l'expression régulière
  if(testCity) {
    small_city.innerHTML = 'Ville Valide';
    small_city.classList.remove('text-danger')
    small_city.classList.add('text-success');
  } else {
    small_city.innerHTML = 'Ville non valide';
    small_city.classList.remove('text-success');
    small_city.classList.add('text-danger');
  }
  };
  

