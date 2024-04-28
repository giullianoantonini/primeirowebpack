document.getElementById("botaoSomar").addEventListener("click", executarDividir)

function executarDividir() {
    const num1 = Number(document.getElementById("numeroUm").value)
    const num2 = Number(document.getElementById("numeroDois").value)
    if (num2 === 0) {
        return document.getElementById("resultadoRetornado2").innerText = "OPERAÇÃO INVÁLIDA"
    }
    const resultado = num1 / num2
    document.getElementById("resultadoRetornado2").innerText = resultado
    return resultado
}

export {
    executarDividir,
}