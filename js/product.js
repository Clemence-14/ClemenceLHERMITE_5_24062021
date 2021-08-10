// Get id from url
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const productId = urlParams.get('id')

window
  .fetch('http://localhost:3000/api/furniture/' + productId)
  .then(response => response.json())
  .then(response => {
    if (Object.entries(response).length === 0) {
      window.alert('pas de produit')
    } else {
      createProduct(response)
    }
  })
  .catch(error => window.alert('Erreur : ' + error))

const createProduct = product => {
  // Edit product name
  const productName = document.getElementById('product-name')
  productName.innerHTML = product.name

  // Edit product image
  const productImage = document.getElementById('product-image')
  productImage.src = product.imageUrl
  productImage.alt = product.name
  

  //Edit product price
  const productPrice = document.getElementById('product-price')
  productPrice.innerHTML = product.price
  

  //Edit product description
  const productDescription = document.getElementById('product-description')
  productDescription.innerHTML = product.description

  

  //Get select of options
  const productOptions = document.getElementById('product-options')

  //Browse the options board 
  for (const varnish of product.varnish) {
    //Edit element HTML <option>
    const productOption = document.createElement('option')
    productOption.value = varnish
    productOption.innerHTML = varnish

    //Add option to select
    productOptions.appendChild(productOption) }

  }

 
  // Gestion du panier
  // Récupération des données sélectionnées par l'utilisateur et envoie du panier

  // Sélection de l'id du formulaire
  const idForm = document.querySelector("#qt");


  // Sélection du bouton Ajouter au panier
  const cart = document.querySelector("#cart");
  console.log(cart);

  // Écouter le bouton et envoyer au panier
  cart.addEventListener("click", (event)=>{
    event.preventDefault();

    // Mettre le choix de l'utilisateur dans une variable
  const choixForm = idForm.value;
  console.log(choixForm);

    // Récupération des valeurs du formulaire quantité
  let qt = {
    qt : choixForm,
    }

  console.log(qt);

  // Récupération des valeurs dans le main de product.html
  const nomProduit = document.querySelector("#product-name")
  console.log(nomProduit)

  const prixProduit = document.querySelector("#product-price")
  console.log(prixProduit)

  const imageProduit = document.querySelector("#product-image")
  console.log(imageProduit)

  const optionProduit = document.querySelector("#product-options")
  console.log(optionProduit)


  
  
  
    // LOCAL STORAGE
  // Stocker la récupération des valeurs du formaulaire dans le local storage

  if (
    window.confirm(
      'Le produit a été ajouté au panier. Voulez-vous voir votre panier?'
    )
    
  ){
    window.location.href = 'cart.html'
  }
}
  )

  

  
 

  



      
      
      
      
     
     
    

    
  


