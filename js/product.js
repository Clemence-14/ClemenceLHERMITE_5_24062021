// Je récupère l'id produit dans l'url grâce à la méthode URLSearchParams pour effectuer la requête
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const productId = urlParams.get('id') //Constante qui contient l'id

window
  .fetch('http://localhost:3000/api/furniture/' + productId)
  .then(response => response.json())
  .then(response => {
    if (Object.entries(response).length === 0) {
      window.alert('pas de produit')
    } else {
      createProduct(response); console.log(response)
    }
  })
  .catch(error => window.alert('Erreur : ' + error))

const createProduct = product => {  //Fonction pour afficher les produits
  //Éditer product name
  const productName = document.getElementById('product-name')
  productName.innerHTML = product.name

  //Éditer product image
  const productImage = document.getElementById('product-image')
  productImage.src = product.imageUrl
  productImage.alt = product.name
  
  //Éditer product price
  const productPrice = document.getElementById('product-price')
  productPrice.innerHTML = product.price/100 + "€" //Passage du prix en centimes en euros
  
  //Éditer product description
  const productDescription = document.getElementById('product-description')
  productDescription.innerHTML = product.description

  //Prendre le select d'options
  const productOptions = document.getElementById('product-options')

  //Parcourir le tableau des options
  for (const varnish of product.varnish) {
    //Éditer element HTML <option>
    const productOption = document.createElement('option')
    productOption.value = varnish
    productOption.innerHTML = varnish

  //Ajouter option au select
    productOptions.appendChild(productOption) 
  }

  
  const addToCartButton = document.getElementById('cart') // On pointe le bouton cart

  addToCartButton.addEventListener('click', event => {  // On ajoute un écouteur d'événement sur le clic
    addToCart(product) 
  })
}

const addToCart = product => {  
  let cart = window.localStorage.getItem('cart') // On récupère l'objet cart dans le local storage

  if (cart === null) {
    cart = [] // Si l'objet' n'existe pas dans le local storage, on le crée
  } else {
    cart = JSON.parse(cart) // Sinon on le transforme en tableau
  }
  
  cart.push({  // On ajoute le produit à notre tableau
    id: product._id,
    image: product.imageUrl,
    name: product.name,
    price: product.price,
  })

  // On transforme le tableau en objet JSON, et on l'ajoute dans le local storage
  window.localStorage.setItem('cart', JSON.stringify(cart)) 
  if (
    window.confirm(
      'Le produit a été ajouté au panier. Voulez-vous voir votre panier ?'
    )
  ) {
    window.location.href = 'cart.html'  //On redirige vers la page panier
  }
}








      
      
      
      