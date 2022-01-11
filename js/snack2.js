// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


const firstWord = prompt('Inserisci una parola').trim();
const secondWord = prompt('Inserisci una parola').trim();



if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord)
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord)
}