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
  productPrice.innerHTML = product.price/100 + "€" //Passage du prix en centimes en euros
  

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

  // On pointe le bouton AddToCart
  const addToCartButton = document.getElementById('cart')

  // On ajoute un écouteur d'événement sur le clic
  addToCartButton.addEventListener('click', event => {
    addToCart('product')

  })


const addToCart = product => {
  // On récupère l'objet cart en session
  let cart = window.localStorage.getItem('cart')

  if (cart === null) {
    // Si l'objet' n'existe pas en session, on le crée
    cart = []
  } else {
    // Sinon on le transforme en tableau
    cart = JSON.parse(cart)
  }

  // On ajoute le produit à notre tableau
  cart.push({
    id: product._id,
    image: product.imageUrl,
    name: product.name,
    price: product.price
  })

  // On transforme le tableau en objet JSON, et on l'ajoute en session
  window.localStorage.setItem('cart', JSON.stringify(cart))

  if (
    window.confirm(
      'Le produit a été ajouté au panier. Voulez-vous voir votre panier ?'
    )
  ) {
    window.location.href = 'cart.html'
  }
}



      
      
      
      