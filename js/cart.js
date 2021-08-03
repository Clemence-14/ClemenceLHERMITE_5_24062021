fetch("http://localhost:3000/api/furniture")
.then(response => response.json())
.then(response => {
    createThumbnails(response);
})
.catch(error => alert("Erreur : " + error));
   

function createThumbnails(cart) {
    const table = document.getElementById('cart-rows')
    for (const cart of cart-rows){
        console.log(cart)
    

    }
}



//Récupération du formulaire
let form = document.getElementById("myform");


form.onsubmit = function() {
    let username = document.getElementById("username")
    let usermail = document.getElementById("usermail")
    let phone = document.getElementById("phone")
    let adress = document.getElementById("adress")
    let code = document.getElementById("code")
    let city = document.getElementById("city")

    if (username.value && usermail.value && phone.value && adress.value && code.value && city.value) {
        
       
//Si les champs ne sont pas renseignés
    }else {
        alert("Veuillez saisir tous les champs");
    }

    
}



