const slyder = document.getElementById('range')
const letras = document.getElementById('valor')
var senha = document.getElementById('senha')

function tamanhosenha (){

    let valor = slyder.value;
    letras.textContent = valor;
    
};

function opcoes(){
    

}

// caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789'
function gerarsenha(){
        var maiusculas = document.getElementById('maiusculas')
        var minusculas = document.getElementById('minusculas')
        var numeros = document.getElementById('numeros')
        var simbolos = document.getElementById('simbolos')
        var upper = ""
        var lower = ""
        var numbers =""
        var symbols =""
        if (maiusculas.checked==true){
            // alert('olá mundo')
            upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }else{
            // alert('tchau mundo')
            upper = ""
            
        }
        if (minusculas.checked==true){
            // alert('olá mundo')
            lower = "abcdefghijklmnopqrstuvwxyz"
        }else{
            // alert('tchau mundo')
            lower = ""
            
        }
        if (numeros.checked==true){
            // alert('olá mundo')
            numbers = "0123456789"
        }else{
            // alert('tchau mundo')
            numbers = ""
            
        }
        if (simbolos.checked==true){
            // alert('olá mundo')
            symbols = "!@#$%&*()+={[}]?/:;>.<,|\'^~"
        }else{
            // alert('tchau mundo')
            symbols = ""
            
        }
    var caracteres = upper + lower + numbers + symbols;
    let tamanho = slyder.value
    var stringAleatoria = '';
    
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    senha.innerText=stringAleatoria
    
}
