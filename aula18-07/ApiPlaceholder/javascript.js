const nome = document.getElementById("nome")
const email = document.getElementById("email")
const username = document.getElementById("username")
const btn = document.getElementById("btn")

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         nome.innerText = data[1].name
//         email.innerText = data[1].email
//         username.innerHTML = data[1].username
//     })

//     .catch((err) => {
//         nome.innerText = "Não foi posivel localizar o elemento"
//         email.innerText = "Não foi posivel localizar o elemento"
//         username.innerHTML = "Não foi posivel localizar o elemento"
//     })

// btn.addEventListener("click",(event) =>{

// })


const buscarUsuario = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            nome.innerText = data[1].name
            email.innerText = data[1].email
            username.innerHTML = data[1].username
        })
        .catch((err) => {
            nome.innerText = "Não foi posivel localizar o elemento"
            email.innerText = "Não foi posivel localizar o elemento"
            username.innerHTML = "Não foi posivel localizar o elemento"
        })
}


btn.addEventListener("click", function () {
    buscarUsuario()
})  