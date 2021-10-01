////Insertion du nom de famille pour remercier de la commande sur la page de confirmation

//Je récupère dans le local storage le user last name(prénom)
let userLastNameProduct = window.localStorage.getItem('lastName')
console.log(userLastNameProduct)

//Je récupère l'id du span sur la page confirmation.html
const user_last_name = document.getElementById('user_last_name')

//J'insère le prénom de la personne dans le span user_last_name dédié
document.querySelector('span#user_last_name').innerText = `${userLastNameProduct}`

////Fin pour le nom de famille////


////Insertion du prénom pour remercier de la commande sur la page de confirmation////

//Je récupère dans le local storage le username(nom de famille)
let userNameProduct = window.localStorage.getItem('firstName')
console.log(userNameProduct)

//Je récupère l'id du span sur la page confirmation.html
const user_name = document.getElementById('user_name')

//J'insère le nom de famille de la personne dans le span user_name dédié
document.querySelector('span#user_name').innerText = `${userNameProduct}`

////Fin pour le prénom////


 ////Prix total//// 

 //Je récupère dans le local storage le totalPrix
 let totalPriceLocal = window.localStorage.getItem('totalPrix')
 console.log(totalPriceLocal)
 
 //Je récupère l'id du span sur la page confirmation.html
 const total_price2 = document.getElementById('total_price2')
 
 //J'insère le prix total dans le span qui lui est dédié
 document.querySelector('span#total_price2').innerText  = `${totalPriceLocal}` + "€"

////Fin pour le prix total////

//Je récupère dans le local storage la key commande qui contient l'id du produit
let id_commande = window.localStorage.getItem('commande')
console.log(id_commande)

//Je récupère l'id du span sur la page confirmation.html
const orderId = document.getElementById('orderId')

//J'insère l'id produit dans le span qui lui est dédié
document.querySelector('span#orderId').innerText = `${id_commande}`

localStorage.clear()
