let textField = document.querySelector('.inputField');
let submit = document.querySelector('.submit');
let previous_guesses = document.querySelector('.previous_guess');
let results = document.querySelector('.results');
let newGame = document.querySelector('.newGame');

let randomNumber = Math.floor(Math.random(100) * 100) + 1;
console.log(randomNumber);

submit.onclick = function() {
    work_done();
}

let guesses = 0;
let lastGuesses = 'The previous guesses are : ';
function work_done() {
   
    let value = Number(textField.value);
    lastGuesses += value + " ";
    previous_guesses.textContent = lastGuesses;
    if(value == randomNumber) {
        results.textContent = 'You won the game !!';
        textField.value = "";
    }
    if(value > randomNumber) {
        results.textContent = 'Value is larger than guessing number';
        textField.value = "";
    }
    if(value < randomNumber) {
        results.textContent = 'Value is smaller than guessing number';
        textField.value = "";
    }
    guesses++;
    if(guesses == 5){
        results.textContent = 'Your number of guesses are over. Start a new game';
    }
        
        
   
    
}
