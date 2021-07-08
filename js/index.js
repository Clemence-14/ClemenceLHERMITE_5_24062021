fetch("http://localhost:3000/api/furniture")
.then(response => response.json())
.then(response => {
    createThumbnails(response);
})
.catch(error => alert("Erreur : " + error));

function createThumbnails(products) {
    for (const product of products) {
        console.log(product)
    }

    for (product of products) {
        console.log(product.name)
    }

    for (product of products) {
        console.log(product.price)
    }

    for (product of products) {
        console.log(product.description)
    }

    for (product of products) {
        console.log(product.imageUrl)
    }
}







/*
const vignette = document.createElement('div');
const mesProduits = document.getElementById('products');*/



