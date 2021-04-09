var prompt = require('prompt-sync')();

var peso = prompt('Informe seu peso: ').replace(',', '.');
var altura = prompt('Informe sua altura: ').replace(',', '.');

if (!altura.includes('.')) {
	altura = altura / 100;
}

var imc = peso / (altura * 2);
var situacao = 'Vazio';

if (imc <= 17) {
	situacao = 'Muito abaixo do peso';
} else if (imc >= 17 && imc <= 18.5) {
	situacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
	situacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29.9) {
	situacao = 'Acima do peso';
} else if (imc >= 30 && imc <= 34.9) {
	situacao = 'Obesidade 1';
} else if (imc >= 35 && imc <= 39.9) {
	situacao = 'Obesidade 2 (Severa)';
} else if (imc >= 40) {
	situacao = 'Obesidade 3 (Mórbida)';
}

console.log(`A altura do usuário é ${altura}m e seu peso é de ${peso}KG`);
console.log(`Seu IMC é ${imc} , e você está em ${situacao}`);
