console.log('This is javaScript');

let textField = document.querySelector('.inputField');
let submit = document.querySelector('.submit');
let previous_guess = document.querySelector('.previous_guess');
let results = document.querySelector('.results');
let newGame = document.querySelector('.newGame');

let randomNumber = Math.floor(Math.random(100) * 100) + 1;
console.log(randomNumber);

submit.onclick = function() {
    work_done();
}

function work_done() {
    let value = Number(textField.value);
        if(value == randomNumber) {
            results.textContent = 'You won the game !!';
        }
        if(value > randomNumber) {
            results.textContent = 'Value is larger than guessing number';
        }
        if(value < randomNumber) {
            results.textContent = 'Value is smaller than guessing number';
        }
    
        
   
    
}
