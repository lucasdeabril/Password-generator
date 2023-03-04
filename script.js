const slyder = document.getElementById('range')
const letras = document.getElementById('valor')
var senha = document.getElementById('senha')

function tamanhosenha (){

    let valor = slyder.value;
    letras.textContent = valor;
    
}

function gerarsenha(){
    var maiusculas = document.getElementById('maiusculas')
    var minusculas = document.getElementById('minusculas')
    var numeros = document.getElementById('numeros')
    var simbolos = document.getElementById('simbolos')
    var upper = ""
    var lower = ""
    var numbers =""
    var symbols =""
    if (maiusculas.checked==true || minusculas.checked==true ||
        numeros.checked==true || simbolos.checked==true){
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
    }else{
        alert('Selecione alguma das opções para criar uma senha')
    }
    forca_da_senha();
    
}
function forca_da_senha(){
    var forca = document.getElementById('forca')
    var imagem = document.getElementById('paint')
    var M = 0
    var m = 0
    var n = 0
    var s = 0

    if (maiusculas.checked==true){
        // alert('olá mundo')
        M = 1 
    }
    if (minusculas.checked==true){
        // alert('olá mundo')
        m = 1
    }
    if (numeros.checked==true){
        // alert('olá mundo')
        n = 1
    }
    if (simbolos.checked==true){
        // alert('olá mundo')
        s = 1
    }
    var numero_letras = slyder.value

    var strenth = (M + m + n + s)* slyder.value
    var nota = ''
    if (strenth >=64 ){
        nota = 'Muito forte'
        imagem.src=('img'+5+'.jpg')
    }
    if (strenth < 64){
        nota = 'forte'
        imagem.src=('img'+4+'.jpg')
    }
    if (strenth < 48){
        nota= 'Média'
        imagem.src=('img'+3+'.jpg')
    }
    if (strenth < 32){
        nota= 'Fraca'
        imagem.src=('img'+2+'.jpg')
    }
    
    
    if (strenth < 16){
        nota= 'Muito fraca'
        imagem.src=('img'+1+'.jpg')
    }
    forca.innerText=(nota)
    
    
}
