
const btn = document.getElementById('btn');
const result = document.getElementById('container-result');

function calculoIMC() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let imc = (peso / (altura * altura)).toFixed(2);
    console.log(peso);
    console.log(altura);

    let classificacao = '';

    if (nome == '' || altura == '' || peso == '') {
        result.textContent =  "Preencha todos os campos";
        return false;
    }

    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
    }
    else if (imc < 25) {
        classificacao = 'com peso ideal'
    }
    else if (imc < 30) {
        classificacao = 'levemente a cima do peso'
    }
    else if (imc < 35) {
        classificacao = 'obesidade grau I'
    }
    else if (imc < 40) {
        classificacao = 'obesidade grau II'
    }
    else {
        classificacao = 'obesidade grau III'
    }

    result.textContent = `${nome}, o seu IMC é ${imc} e você está ${classificacao}`;
}

btn.addEventListener('click', calculoIMC)