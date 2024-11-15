import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/* 

Oefening 3: Functies/Arrays (20 punten)

Schrijf zelf de volgende functies die een array als boodschappenlijst gaan aanvaarden en de geupdate lijst terug gaan returnen:

    voegItemToe(lijst, item): Voeg item toe aan het einde van lijst
    toonLijst(lijst): Druk de hele inhoud van lijst af
    maakLijstLeeg(lijst): Zorg ervoor dat lijst niets meer bevat

Zorg ervoor dat de output ook overeen komt met wat er in het voorbeeld staat.


Deze functies moeten op deze manier kunnen worden aangeroepen:
*/

let lijst = []

function voegItemToe(lijst, item){
    lijst.push(item);
    return lijst;
}

function toonLijst(lijst){
    console.log('Er staat het volgende op mijn lijstje:')
    for(let i = 0; i < lijst.length; i++)
        console.log('-' + lijst[i])
}

function maakLijstLeeg(lijst){
    while(lijst.length > 0){
        lijst.pop();
        if(lijst.length == 0){
            let legelijst = 'Momenteel is mijn lijst leeg'
            return legelijst
        }
        
    }
}

lijst = voegItemToe(lijst, 'Melk');
lijst = voegItemToe(lijst, 'brood');
let printLijst = toonLijst(lijst);
console.log(maakLijstLeeg(lijst));


process.exit();