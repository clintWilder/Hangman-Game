var wordsList = ["cowboy", "revolver", "outlaw", "sheriff", "horse", "saloon", "sarsparilla"];
var currentWord = "";
var lettersIncurrentWord = [];
var numBlanks = 0;
var currentGuess = [];
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses;


function startGame() {

    numGuesses = 10; 
    currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersIncurrentWord = currentWord.split("");
    numBlanks = lettersIncurrentWord.length;
	currentGuess = [];
    wrongGuesses = [];


    for (var i = 0; i < numBlanks; i++) {
        currentGuess.push("_");
    }

    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordblanks").innerHTML = currentGuess.join(" ");
    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
}



function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (currentWord[i] === letter) {
            letterInWord = true;
        }
    }


    if (letterInWord) {
    	for (var i = 0; i < numBlanks; i++) {
    		if (currentWord[i] === letter) {
                currentGuess[i] = letter;
            }
        }
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}



function roundComplete() {
	document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordblanks").innerHTML = currentGuess.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


    if (lettersIncurrentWord.toString() === currentGuess.toString()) {
        winCounter++;
        alert("You win!");


        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    } else if (numGuesses === 0) {
        lossCounter++;
        alert("You lose ");


        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame();
    }

}

startGame();


document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);
    roundComplete();
}