document.getElementById("botaoConcatenar").addEventListener("click", executarConcatenar)

function executarConcatenar() {
    console.log("Fui clicado")

    const valor1 = (document.getElementById("caractereUm").value)
    const valor2 = (document.getElementById("caractereDois").value)
    const resultado = valor1 + " " + valor2
    document.getElementById("resultadoRetornado").innerText = resultado
    return resultado
}

export {
    executarConcatenar,
}