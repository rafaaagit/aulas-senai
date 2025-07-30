// console.log("A")
// setTimeout(() =>{
//     console.log("B")
// },2000)

// console.log("C")


// function fazerAlgo(my) {
//     setTimeout(() => {
//         console.log("Iniciando")
//         my()
//         console.log("finalizando")
//     }, 2000)
// }

// function myCallback () {
//     console.log("myCalback")
// }

// fazerAlgo(myCallback)


// function pedirComida(callback) {
//     console.log("Pedido feito... Aguarde!")

//     setTimeout(() => {
//         console.log("Pedido pronto!!!")
//         callback()
        

//     }, 2000)
// }

// function comer (){
//     console.log("Comendo a comida!!!!, Mastigando!!!!!!!!")
// }

// pedirComida(comer)


// const pizzaChegou = false

// const chegou = () =>{
//     console.log("A pizza chegou!")
// }

// const cancelado = () =>{
//     console.log("Pedido Cancelado!!!")
// }

// const pedido = (callbacksuccess, callbackerorr) =>{
//     // não precisa colocar igual a true ele já verifica sozinho 
//     if(pizzaChegou == true){
//         callbacksuccess()
//     }else{
//         callbackerorr()
//     }
// }

// pedido(chegou, cancelado)

// Promise
// rsolve trata o sucesso 
// .then trata sucesso
// reject trata o erro
// .cath trata reject
// estrutura de uma Promise

// const pizza = false

// const pedido = new Promise((resolve, reject) =>{
//     if(pizza){
//         resolve("A pizza Chegou!!!")
//     }else{
//         reject("Pedido cancelado!!!")
//     }
// })

// pedido
//     .then((res) =>{
//         console.log(res)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })



