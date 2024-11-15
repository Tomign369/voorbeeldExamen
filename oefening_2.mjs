import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/* 
while != 45
*/
 
let invoergetal;
let lijstGetallen = [];
let getallenOnderTien = []
let som = 0;
let gem = 0;
let uitkomst;

do{
    invoergetal = parseFloat(await userInput.question(''));
    lijstGetallen.push(invoergetal);
}while(invoergetal != 45)

function gemiddelde(lijstGetallen){
    for(let i = 0; i < lijstGetallen.length; i++){
        if(lijstGetallen[i] <= 10){
            getallenOnderTien.push(lijstGetallen[i])
        }
    }
}

function berekenGemiddelde(getallenOnderTien){
    for(let i = 0; i < getallenOnderTien.length; i++){
        som += getallenOnderTien[i]
    } 
    gem = som / getallenOnderTien.length
    return gem
}

gemiddelde(lijstGetallen);
uitkomst = berekenGemiddelde(getallenOnderTien);
console.log('Gemiddelde van getallen kleiner of gelijk aan 10: ' + uitkomst);
process.exit();