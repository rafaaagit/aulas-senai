let input = document.getElementById("celsius");
let btn = document.getElementById("converter"); 
let resultado = document.getElementById("resultado");
let celsius


const converterTemperatura = () => {
    
    let celsiusNumerico = parseFloat(celsius); 
    if (isNaN(celsiusNumerico)) { 
        return "Por favor, insira um número válido.";
    }
    return (celsiusNumerico * 9 / 5) + 32;
}


btn.addEventListener("click", function() {
    celsius = input.value
    resultado.innerText = converterTemperatura()
})