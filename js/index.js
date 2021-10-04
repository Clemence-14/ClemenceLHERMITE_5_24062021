fetch("http://localhost:3000/api/furniture") //Retourne une promesse contenant la réponse
.then(response => response.json())  //On indique le format de réponse souhaité
.then(response => {
    createThumbnails(response);   console.log(response)
})
.catch(error => alert("Erreur : " + error));

function createThumbnails(products) {
    const productsContainer = document.getElementById('products')  //Récupération de la div avec l'id products
    
    for (const product of products) {  //On parcourt l'objet et les valeurs de ses différentes propriétés
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
    //Ajout de productImage à productLink
    productLink.appendChild(productImage)
    //Ajout de productLink à productContainer
    productContainer.appendChild(productLink)
    
    //Création product name
    const productName = document.createElement('h3')
    productName.innerHTML = product.name
    //Ajout de product name à product container
    productContainer.appendChild(productName)
    
    //Création product description
    const productDescription = document.createElement('p')
    productDescription.innerHTML = product.description
    //Ajout de product description à product container
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









