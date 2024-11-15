import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let genereren = parseFloat(await userInput.question('Hoeveel willekeurige getallen wil je genereren? '));
let lijstRandomGetallen = [];
let lijstEvenGetallen = [];

for(let i = 0; i < genereren; i ++){
    lijstRandomGetallen.push(random(1, 10));
}console.log('De gegenereerde willekeurige getallen zijn: ' + lijstRandomGetallen.join(', ') + '.')


function checkEven(lijstRandomGetallen){
    for(let i = 0; i < lijstRandomGetallen.length; i++){
        if(lijstRandomGetallen[i] % 2 == 0){
            lijstEvenGetallen.push(lijstRandomGetallen[i])
        }
    }console.log(lijstEvenGetallen.length + ' ervan zijn even.')
    
}

checkEven(lijstRandomGetallen);
 
process.exit();