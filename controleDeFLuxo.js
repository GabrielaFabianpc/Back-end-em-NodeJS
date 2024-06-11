const numero1 = 100;
const numero2 = "100";

if (numero1 > 200) {
  console.log(`${numero1} é maior que 200`);
} else console.log(`${numero1} é menor que 200`);

if (numero1 > numero2) {
  console.log(`Numero1 ${numero1} é maior que Numero2 ${numero2}`);
} else console.log(`Numero2 ${numero2} é maior que Numero1 ${numero1}`);

if (numero1 == numero2) {
  console.log(
    "Os numeros são iguais em valor apenas (podendo ter ocorrido coerções implícitas)"
  );
}

if (numero1 === numero2) {
  console.log("Os numeros são iguais em valores e tipo");
}
