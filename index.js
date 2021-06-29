fetch("http://localhost:3000/api/furniture")
.then(response => response.json())
.then(response => {
    createThumbnails(response);
})
.catch(error => alert("Erreur : " + error));

function createThumbnails(products) {
    console.log(products);
}