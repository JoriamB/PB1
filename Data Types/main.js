const testNumber = 5;
function evenOrOdd(testNumber) {
    if (testNumber % 2 == 0) {
        console.log('getal is even');
    } else {
        console.log('getal is oneven');
    }
}
evenOrOdd();

// Remove word of string
const programmingString = 'Programming is not so cool';
// Print the default string in console
console.log(programmingString);
let newProgrammingString = programmingString.replace('not ', '');
// Print the modified string in console 
console.log(newProgrammingString);

// Illogical value check
const value = 1400;
const sentence = 'Ik woon in Naboo';
// Checks if value has the same value as sentence
console.log(value == sentence);

// De boolean checkt of 1400 dezelfde waarde heeft als de string 'Ik woon in Naboo', dit zal nooit zo zijn, omdat value een number is en sentence een string. Een beter voorbeeld zou zijn om de waarde van value te vergelijken met de length van de string.

 