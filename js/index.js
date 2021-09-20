fetch("http://localhost:3000/api/furniture")
.then(response => response.json())
.then(response => {
    createThumbnails(response);
})
.catch(error => alert("Erreur : " + error));

function createThumbnails(products) {
    //Récupération de la div avec l'id products
    const productsContainer = document.getElementById('products')

    for (const product of products) {
        console.log(product)

    //Création du container product
    const productContainer = document.createElement('div')
    productContainer.classList.add('product')
    

    //Création du lien produit
    const productLink = document.createElement('a')
    productLink.href = 'product.html?id=' + product._id
    



    //Création product image
    const productImage = document.createElement('img')
    productImage.src = product.imageUrl
    //Add productImage to productLink
    productLink.appendChild(productImage)
    //Add productLink to productContainer
    productContainer.appendChild(productLink)
    
    
    

    //Création product name
    const productName = document.createElement('h3')
    productName.innerHTML = product.name
    //Add product name to product container
    productContainer.appendChild(productName)
    

    //Création product description
    const productDescription = document.createElement('p')
    productDescription.innerHTML = product.description
    //Add product description to product container
    productContainer.appendChild(productDescription)
    

    //Création product price
    const productPrice = document.createElement('p')
    productPrice.innerHTML = product.price/100 + "€" //Passage du prix en centime en euros
    //Ajout de product price à product container
    productContainer.appendChild(productPrice)
    
    //Ajout productContainer à productsContainer
    productsContainer.appendChild(productContainer)

}

}









