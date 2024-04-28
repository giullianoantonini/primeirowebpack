require("./index.css")

console.log("Olá WebPack");

document.getElementById("botaoConcatenar").addEventListener("click", executarConcatenar)
document.getElementById("botaoSomar").addEventListener("click", executarDividir)

function executarConcatenar() {
    console.log("Fui clicado")

    const valor1 = (document.getElementById("caractereUm").value)
    const valor2 = (document.getElementById("caractereDois").value)
    const resultado = valor1 + " " + valor2
    document.getElementById("resultadoRetornado").innerText = resultado
    return resultado
}

function executarDividir() {
    const num1 = Number(document.getElementById("numeroUm").value)
    const num2 = Number(document.getElementById("numeroDois").value)
    const resultado = num1 / num2
    document.getElementById("resultadoRetornado2").innerText = resultado
    return resultado
}