const idade = 18;
const idadeMinima = 18;

const dirigir = idade >= idadeMinima ? "cerveja" : "suco";
console.log(dirigir);

const temCnh = true;

const podeDirigir = idade >= idadeMinima && temCnh;
const numeroDePassageiros = podeDirigir ? 4 : 0;

console.log(podeDirigir);
console.log(numeroDePassageiros);
