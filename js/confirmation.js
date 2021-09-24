let userNameProduct = window.localStorage.getItem('username')
console.log(userNameProduct)

const user_name = document.getElementById('user_name')
console.log(user_name)

document.querySelector('span#user_name').innerText = `${userNameProduct}`
