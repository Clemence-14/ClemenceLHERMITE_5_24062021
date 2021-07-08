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
}

try {
    const productsDiv = document.getElementById('productsDiv')
    const productDiv = document.createElement('div')
    productsDiv.appendChild('productDiv')
    
} catch (err) {
    console.log(err);
}






/*
const vignette = document.createElement('div');
const mesProduits = document.getElementById('products');*/



