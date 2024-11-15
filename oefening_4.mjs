import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* 
Wat voor type artikel. De volgende types zijn geldig:
    krant: 0% BTW
    voeding: 6% BTW
    medicijnen: 6% BTW
    restaurant: 12% BTW
    Alle overige types: 21% BTW

    Prijs exclusief BTW

Zorg ervoor dat de prijs inclusief btw in de variabele totaal komt de staan na uitvoer van je script.

Zorg ervoor dat je script minstens een switch/case structuur en een functie bevat.
*/

let prijsInclusiefBTW = 0.0
let lijstTypes= [
    'krant: \t\t0% BTW',
    'voeding/medicijnen: \t6% BTW',
    'restaurant: \t\t12% BTW',
    'alle overige types: \t21% BTW',
]

for(let i = 0; i < lijstTypes.length; i++){
    console.log((i+1) + '. ' + lijstTypes[i])
}
let typeArtikel = await userInput.question('Wat voor type artikel?: ');
let prijsExclusiefBtw = parseFloat(await userInput.question('Prijs exclusief BTW: ')); 

switch (typeArtikel){
    case 'krant':
        prijsInclusiefBTW = prijsExclusiefBtw 
        break;

    case 'voeding':
    case 'medicijnen':
        prijsInclusiefBTW = prijsExclusiefBtw * 1.06;
        break;
    case 'restaurant':
        prijsInclusiefBTW = prijsExclusiefBtw *1.12;
        break;
    default:
        prijsInclusiefBTW = prijsExclusiefBtw * 1.21;
        break;
}
console.log('prijs inclusief BTW: €' + prijsInclusiefBTW.toFixed(2));



process.exit();