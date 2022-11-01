//trocar os valores de a e b (depois da troca a = 94 e b = 7)

let a = 7;
let b = 94;

let temporaria = a;
a = b;
b = temporaria;

//[a, b] = [b, a]; Outra forma de alterar os valores

console.log('A = ' + a);
console.log('B = ' + b);
