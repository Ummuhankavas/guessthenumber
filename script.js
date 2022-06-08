let guess1 = document.querySelector("#guess1");
let guess2 = document.querySelector("#guess2");
let guess3 = document.querySelector("#guess3");
let result = Math.floor(Math.random()*100)+1;

let guesses = 0;
let guessCount = [];
let resetButton;

function play() {
    let userGuess = document.querySelector("#guess").value;
    if(userGuess <1 || userGuess > 100){
        alert("Enter a number between 1 to 100");
    }
    else{
        guessCount.push(userGuess);
        guesses = guesses + 1;
        if(userGuess < result){
            guess1.textContent = "Your Guess Is Low";
            guess2.textContent = "Number Of Guesses : " + guesses;
            guess3.textContent = "Guessed Numbers are : " + guessCount;
        }
        else if(userGuess > result){
            guess1.textContent = "Your Guess Is High";
            guess2.textContent = "Number Of Guesses : " + guesses;
            guess3.textContent = "Guessed Numbers are : " + guessCount;
        }
        else if(userGuess == result){
            guess1.textContent = "Congrats! You are a Mind Reader!";
            guess2.textContent = "The number is : " + result;
            guess3.textContent = "You Guessed With The Number "+ result;
        }
        
    }
    if(guesses == 5 && userGuess != result){
        guess1.textContent = "GAME OVER!! START A NEW GAME!"
    }
}

