let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function verificarChute(){
    let chute = document.querySelector('input').value;    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else{
            exibirTextoNaTela('p', 'O número é maior!');
        } 
        tentativas++;
        limparCampo();
    }
}

//evitar copiar linha de código
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    if(quantidadeDeElementosNaLista ==3){
        listaDeNumeroSorteados = [];
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
/*
//Atividade 2 Funções
//1
function exibirOla(){
    alert('Olá mundo!');
}
exibirOla();

//2
function exibirOlaNome(nome){
    alert(`Olá, ${nome}`);
}
exibirOlaNome('Krishna');

//3
function calcularDobro(numero){
    return numero * 2;
}

alert(calcularDobro(20));

//4

function calcularMedia(numero1, numero2, numero3){
    let soma = numero1 + numero2 + numero3;
    return soma/3;
}

alert(calcularMedia(1,2,3));

//5
function maiorQue(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    } else if(numero2 > numero1){
        return numero2;
    } else{
        return numero1;
    }
}

alert(maiorQue(1, 5));

//6
function quadrado(numero){
    return numero * numero;
}

alert(quadrado(50));*/

//Atividade 3 Funções
//1 peso/(altura x altura).
/*calcularIMC(78,1.77);
function calcularIMC(peso, altura){
    let imc = peso/(altura*altura);
    alert(`O IMC é ${imc}`);
}*/

//2
/*calculaFatorial(15);
function calculaFatorial(numero){
    let fatorial = 1;
    if(numero > 1){
        contadorFatorial = 1;
        while(contadorFatorial <= numero){
            fatorial = fatorial * contadorFatorial;
            contadorFatorial++;
        }
    }
    alert(`O fatorial do número ${numero} é ${fatorial}`);
}*/
/*
calcularCotacaoDolar(1);
function calcularCotacaoDolar(dinheiroEmReal){
    let valorConvertidoEmReal = dinheiroEmReal * 4.80; 
    alert(`O valor de ${dinheiroEmReal} convertido é ${valorConvertidoEmReal}`);
}*/
/*Geralmente, para encontrar a área de uma figura basta multiplicar a base (b) pela altura (h). 
Já o perímetro é a soma dos segmentos de retas que formam a figura, chamados de lados (l). 
Para encontrar esses valores é importante analisar a forma da figura.
*//*
let base = 50; 
let altura = 70;
calcularArea(base, altura);
function calcularArea(base, altura){
    let area = base * altura;
    alert(`A área é ${area}`);
}

let lado1 = 50; 
let lado2 = 70;
let lado3 = 70;
let lado4 = 70;
let lado5 = 70;
calcularPerimetro(lado1, lado2, lado3, lado4, lado5);
function calcularPerimetro(lado1, lado2, lado3, lado4, lado5){
    let perimetro = lado1 + lado2 + lado3 + lado4 + lado5;
    alert(`O perimetro é ${perimetro}`);

}
*//*
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);

// Exemplo de uso da função com raio 5
calcularAreaEPerimetro(5);*//*
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);*/
/*
  //1

  let listaGenerica = [];

  //2
  let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

  linguagensDeProgramacao.push('Java');
  linguagensDeProgramacao.push('Ruby');
  linguagensDeProgramacao.push('GoLang');

let nomes = ['Krishna', 'Nicole', 'Maria'];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[nomes.length-1]);

*/