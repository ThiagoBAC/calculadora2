
function adicionarOperador(num){

    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

    console.log(num);
}

function limpar() {
    document.getElementById('resultado').innerHTML = " ";
}

function apagar() {
    let apagar  = document.getElementById('resultado').innerHTML; 
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length-1);
}

function calcular() {
    let calc = document.getElementById('resultado').innerHTML;
    if(calc) {
        document.getElementById('resultado').innerHTML = eval(calc);
    }
}


