/* Vamos entender Variáveis
Variáveis são "recipientes" onde podem armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.


No JavaScript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/


// DECLARAÇÂO DE VARIÀVEIS
var a, b, c;

a = 2;
b = 3;
c = a + b;

alert(c);

var nome, sobrenome, nomeCompleto, idade, soma;

nome = "Breno";
sobrenome = "Souza";
idade = 20;
nomeCompleto = nome + " " + sobrenome;
soma = idade + 10;
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = pessoa;