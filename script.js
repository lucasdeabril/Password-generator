const slyder = document.getElementById('range')

slyder.oninput = (() => {
    const letras = document.getElementById('valor')
    let valor = slyder.value
    letras.textContent = valor
    console.log(valor)
})
    
