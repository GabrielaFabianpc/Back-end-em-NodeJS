//true
//truthy, [], {}, numero diferente de 0, string n vazia ("")
//falsy: null, undefined, 0, "", NaN

console.log(!![], !!{}, !!1, !!"adbaj"); // se negar uma vez ! é não, se negar duas vezes !! ele vira ele proprio

if ([] && {} && "adbaj" && true) {
  console.log("tudo é truthy");
}

console.log(!!null, !!undefined, !!0, !!NaN);
