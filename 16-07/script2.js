// const verificarResultado = new Promise((resolve, reject) => {

// let result = 1 + 9

// if(result = 2){
//     resolve("certo")
// }else{
// reject("errado")
// }

// })

// verificarResultado
//     .then((res) =>{
//         console.log(res)
//     })

//     .catch((err) =>{
//         console.log(err)
//     })


// const buscarUsuario = new Promise((resolve, reject) => {
//     console.log("Buscando usuário no banco... 🧭")

//     setTimeout(() => {
//         const encontrado = true
//         // oque está de chaves é o meu objeto
//         if (encontrado) {
//             resolve({
//                 nome: "Rafael",
//                 email: "rfl@gmail.com",
//                 nome: 20
//             })

//         } else {
//             reject("Usuário não encontrado!!!")
//         }
//     }, 2000)
// })

// buscarUsuario
//     .then((res) => {
//         console.log(res)
//     })

//     .catch((err) => {
//         console.log(err)
//     })