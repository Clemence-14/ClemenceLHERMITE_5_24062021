////Insertion du nom de famille pour remercier de la commande sur la page de confirmation////

//Je récupère dans le local storage le username(nom de famille)
let userNameProduct = window.localStorage.getItem('username')
console.log(userNameProduct)

//Je récupère l'id du span sur la page confirmation.html
const user_name = document.getElementById('user_name')
console.log(user_name)

//J'insère le nom de famille de la personne dans le span user_name dédié
document.querySelector('span#user_name').innerText = `${userNameProduct}`

////Fin pour le nom de famille////


////Insertion du prénom pour remercier de la commande sur la page de confirmation

//Je récupère dans le local storage le user last name(prénom)
let userLastNameProduct = window.localStorage.getItem('userlastname')
console.log(userLastNameProduct)

//Je récupère l'id du span sur la page confirmation.html
const user_last_name = document.getElementById('user_last_name')
console.log(user_last_name)

//J'insère le prénom de la personne dans le span user_last_name dédié
document.querySelector('span#user_last_name').innerText = `${userLastNameProduct}`

////Fin pour le prénom////


////Prix total//// en cours
let price = window.localStorage.getItem('total_price')
console.log(price)

const total_price = document.getElementById('total_price')
console.log(total_price)

document.querySelector('span#total_price').textContent = `${price}`





//Id non fonctionnel
let userId = window.localStorage.getItem(cart)
console.log(userId)

const orderId = document.getElementById('orderId')
console.log(orderId)

document.querySelector('span#orderId').innerText = `${userId}`


