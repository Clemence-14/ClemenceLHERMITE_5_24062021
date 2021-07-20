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

  //Edit product varnish
  const productVarnish = document.getElementById('product-varnish')
  productVarnish.innerHTML = product.varnish
}