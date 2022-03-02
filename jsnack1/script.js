/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

const array = [];
let sum = 0;

while (sum < 200){
   array.push(parseInt (prompt("inserisci un numero")));
   sum += array[array.length - 1];
   console.log(sum)
}