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

