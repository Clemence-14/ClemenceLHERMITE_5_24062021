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
    productOptions.appendChild(productOption)


    const cart = document.getElementById('cart')
   

    //Local storage
    localStorage.removeItem('Cross table');
    localStorage.removeItem('59900');

    //Valeur dans le local storage
    localStorage.setItem('cart', '59900')
    
  }
}