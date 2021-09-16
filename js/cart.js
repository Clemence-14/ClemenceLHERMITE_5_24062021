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


let form = document.querySelector('#orderForm');




/////VALIDATION EMAIL/////

//Ecouter la modification de l'email
form.usermail.addEventListener('change', function() {
    validUserMail(this);
});

const validUserMail = function(inputUserMail) {
  //Creation de la reg exp pour validation email
  let userMailRegExp = new RegExp (
    '^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g' 
  );

  let testMail = userMailRegExp.test(inputUserMail.value);

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


/////VALIDATION NOM PRENOM/////


//Ecouter la modification du nom et prénom
form.username.addEventListener('change', function() {
  validUserName(this);
});

const validUserName = function(inputUserName) {
    //Création de la regexp pour la validation nom et prénom
    let userNameRegExp = new RegExp (
        '^[a-z ,.-]+$', 'i'
    );

    let testName = userNameRegExp.test(inputUserName.value);
    console.log(testName)


    //Récupération de la balise small
  let small_name = inputUserName.nextElementSibling;

  //On teste l'expression régulière
if(testName) {
  small_name.innerHTML = 'Nom et prénom Valide';
  small_name.classList.remove('text-danger')
  small_name.classList.add('text-success');
} else {
  small_name.innerHTML = 'Nom et prénom non valide';
  small_name.classList.remove('text-success');
  small_name.classList.add('text-danger');
}
};



/////VALIDATION NUMERO DE TELEPHONE/////


//Ecouter la modification du numéro
form.phone.addEventListener('change', function() {
    validPhone(this);
  });
  
  const validPhone = function(inputPhone) {
      //Création de la regexp pour la validation nom et prénom
      let phoneRegExp = new RegExp (
          '^0[1-78][0-9]{8}$', 'g'
      );

      let testPhone = phoneRegExp.test(inputPhone.value);
      

      
  
      //Récupération de la balise small
    let small_phone = inputPhone.nextElementSibling;
  
    //On teste l'expression régulière
  if(testPhone) {
    small_phone.innerHTML = 'Valide';
    small_phone.classList.remove('text-danger')
    small_phone.classList.add('text-success');
  } else {
    small_phone.innerHTML = 'Numéro non valide';
    small_phone.classList.remove('text-success');
    small_phone.classList.add('text-danger');
  }
  };




  /////VALIDATION NUMERO ET RUE/////


//Ecouter la modification du numéro et rue
form.adress.addEventListener('change', function() {
    validAdress(this);
  });
  
  const validAdress = function(inputAdress) {
      //Création de la regexp pour la validation nom et prénom
      let adressRegExp = new RegExp (
        '^[0-9]{1,3}(?:(?:[,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)*$'
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



  /////VALIDATION CODE POSTAL/////


//Ecouter la modification du code postal
form.code.addEventListener('change', function() {
    validCode(this);
  });
  
  const validCode = function(inputCode) {
      //Création de la regexp pour la validation nom et prénom
      let codeRegExp = new RegExp (
        '^[0-9]{5}$', 'g'
      );

      let testCode = codeRegExp.test(inputCode.value);
      
        console.log(testCode)
      
  
      //Récupération de la balise small
    let small_code = inputCode.nextElementSibling;
  
    //On teste l'expression régulière
  if(testCode) {
    small_code.innerHTML = 'Code Valide';
    small_code.classList.remove('text-danger')
    small_code.classList.add('text-success');
  } else {
    small_code.innerHTML = 'Code non valide';
    small_code.classList.remove('text-success');
    small_code.classList.add('text-danger');
  }
  };


  /////VALIDATION VILLE/////


//Ecouter la modification du nom et prénom
form.city.addEventListener('change', function() {
    validCity(this);
  });
  
  const validCity = function(inputCity) {
      //Création de la regexp pour la validation nom et prénom
      let cityNameRegExp = new RegExp (
          '^[a-z ,.-]+$', 'i'
      );
  
      let testCity = cityNameRegExp.test(inputCity.value);
      console.log(testCity)
  
  
      //Récupération de la balise small
    let small_city = inputCity.nextElementSibling;
  
    //On teste l'expression régulière
  if(testCity) {
    small_city.innerHTML = 'Nom et prénom Valide';
    small_city.classList.remove('text-danger')
    small_city.classList.add('text-success');
  } else {
    small_city.innerHTML = 'Nom et prénom non valide';
    small_city.classList.remove('text-success');
    small_city.classList.add('text-danger');
  }
  };
  





  
