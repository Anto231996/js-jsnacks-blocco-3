/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

const userNumber = parseInt(prompt("Inserire numero"));


for (let i=0; i < userNumber; i++){
    const array = [];
    while ( array.length < 10 ){
        array.push(Math.floor(Math.random() * 4532) + 4);
    }

    console.log(array)
}