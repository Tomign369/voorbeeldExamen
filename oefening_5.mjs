import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*
Schrijf een script waarin je gegevens van een student aan de gebruiker vraagt en deze in een object  bewaart. De studentengegevens die je moet verzamelen zijn naam, opleiding,
 leeftijd en interesses.

De gebruiker moet in staat zijn om meerdere interesses in te voeren totdat de gebruiker "STOP" invoert.

Zorg dat de gegevens van de student daarna mooi geformatteerd worden weergegeven. Schrijf om dit te doen een functie.
*/

let student = {}
let studentInfo= {
    naam: await userInput.question('geef je naam in: '),
    opleiding: await userInput.question('geef je opleiding in: '),
    leeftijd: parseFloat(await userInput.question('geef je leeftijd in: ')),
    interesses: [],
}

let interesse = '';
do{
    interesse = await userInput.question('geef je interesses in: typ "STOP" als je klaar bent: ');
    if(interesse != 'STOP'){
        studentInfo.interesses.push(interesse);
    }
}while(interesse != 'STOP')

function profielStudent(student, studentInfo){
    student:{
        student.naam= studentInfo.naam;
        student.opleiding= studentInfo.opleiding;
        student.leeftijd= studentInfo.leeftijd;
        student.interesses= studentInfo.interesses.join(' ,');
        return student;
    }
}

let printStudent = profielStudent(student, studentInfo)
console.log(printStudent)


process.exit();