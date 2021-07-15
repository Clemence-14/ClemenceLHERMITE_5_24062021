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
    productsContainer.appendChild(productContainer)


    //Create product image
    const productImage = document.createElement('img')
    productImage.src = product.imageUrl
    //Add product image to product container
    productsContainer.appendChild(productImage)

    }

 
}










