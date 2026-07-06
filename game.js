
const readline = require('readline');
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);
let attempts = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askGuess() {
    rl.question('Guess a number between 1 and 100: ', (answer) => {
        const guess = Number(answer);

        if (isNaN(guess)) {
            console.log('That is not a valid number. Please try again.');
            askGuess();
            return;
        }

        attempts = attempts + 1;

        if (guess < secretNumber) {
            console.log('Too low! Try again.');
            askGuess();    // ← ask the question again
        } else if (guess > secretNumber) {
            console.log('Too high! Try again.');
            askGuess();    // ← ask the question again
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            rl.close();    // ← done! close the program
        }
    });
}
console.log('Welcome to Guess the Number!');
console.log("I'm thinking of a number between 1 and 100.");
console.log('Can you guess what it is?');

askGuess();  // ← this kicks off the first question

