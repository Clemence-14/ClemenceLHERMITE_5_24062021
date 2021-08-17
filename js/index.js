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
    

    //Create productLink
    const productLink = document.createElement('a')
    productLink.href = 'product.html?id=' + product._id
    



    //Create product image
    const productImage = document.createElement('img')
    productImage.src = product.imageUrl
    //Add productImage to productLink
    productLink.appendChild(productImage)
    //Add productLink to productContainer
    productContainer.appendChild(productLink)
    
    
    

    //Create product name
    const productName = document.createElement('h3')
    productName.innerHTML = product.name
    //Add product name to product container
    productContainer.appendChild(productName)
    

    //Create product description
    const productDescription = document.createElement('p')
    productDescription.innerHTML = product.description
    //Add product description to product container
    productContainer.appendChild(productDescription)
    

    //Create product price
    const productPrice = document.createElement('p')
    productPrice.innerHTML = product.price/100 + "€" //Passage du prix en centime en euros
    //Add product price to product container
    productContainer.appendChild(productPrice)
    
    //Add productContainer to productsContainer
    productsContainer.appendChild(productContainer)

}

}









