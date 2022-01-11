// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const firstNumber = prompt('Inserisci numero')
const secondNumber = prompt('Inserisci numero')

if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
}
