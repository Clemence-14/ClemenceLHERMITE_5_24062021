fetch("http://localhost:3000/api/furniture")
.then(response => response.json())
.then(response => {
    createThumbnails(response);
})
.catch(error => alert("Erreur : " + error));

function createThumbnails(products) {
    //Get products container
    const productsContainer = document.getElementById('products')

    for (const product of products) {
        console.log(product)

    //Create one product container
    const productContainer = document.createElement('div')
    productContainer.classList.add('product')
    //Add product div to product container
    productsContainer.appendChild(productContainer)


    //Create product image
    const productImage = document.createElement('img')
    productImage.src = product.imageUrl
    //Add product image to product container
    productsContainer.appendChild(productImage)

    //Create product name
    const productName = document.createElement('h3')
    productName.innerHTML = product.name
    //Add product name to product container
    productContainer.appendChild(productName)
    productsContainer.appendChild(productContainer)

    //Create product description
    const productDescription = document.createElement('p')
    productDescription.innerHTML = product.description
    //Add product description to product container
    productContainer.appendChild(productDescription)
    productsContainer.appendChild(productContainer)

    //Create product price
    const productPrice = document.createElement('p')
    productPrice.innerHTML = product.price
    //Add product price to product container
    productContainer.appendChild(productPrice)
    productsContainer.appendChild(productContainer)

    }

 
}










