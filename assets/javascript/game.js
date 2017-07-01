var wordList = ["mario", "sonic", "link", "ness", "samus", "jigglypuff", "yoshi", "zelda", "pokeball", "marth", 
		"ganondorf", "pikachu" , "bowser", "fox", "wario", "olimar"];

var currentWord = [],
	
var pickNewWord = function() {
	var index = Math.floor(Math.random()*(wordList.length));
	this.solution = wordList[index];
	},
var gameSolution = wordList[Math.floor(Math.random())],
var guessedLetters = [],
var solution = [],
var incorrectGuesses = [],
var wins = 0,
var losses = 0,
var guessRemain = 10,
var isDone = false




//var game = {

//	currentWord : [],
	
//	pickNewWord : function() {
		//var index = Math.floor(Math.random()*(wordList.length));
	//	this.solution = wordList[index];
	//},
	//gameSolution : wordList[Math.floor(Math.random())],
	//guessedLetters: [],
	//solution:[],
	//incorrectGuesses: [],
	//wins: 0,
	//losses:0,
	//guessRemain: 10,
	//isDone : false
//};



function updateScreen(){
	document.getElementById("incorrect_letters").innerHTML =  incorrectGuesses.toString() ;
	document.getElementById("remaining_guesses").innerHTML =  "Guesses Remaining: " + guessRemain ;
	document.getElementById("win_counter").innerHTML = "Wins: " + wins; 
	document.getElementById("loss_counter").innerHTML = "Losses: " + losses;
	document.getElementById("solution").innerHTML = (currentWord.join('')).toUpperCase();
}


function resetGame () {
	guessRemain = 10;
	wins = 0;
	losses = 0;
	picNewWord();
	guessedLetters = [];
	incorrectGuesses = [];
	currentWord = [];
	for(var i = 0; i < solution.length; i++)
	{
		currentWord[i] = "-";
	}
	updateScreen();


};

function getNewWord(){
	guessRemain = 10;
	guessedLetters = [];
	incorrectGuesses = [];
	picNewWord();
	currentWord = [];
	for(var i = 0; i < solution.length; i++)
	{
		currentWord[i] = "-";
	}
	document.getElementById("incorrect_letters").innerHTML =  incorrectGuesses.toString() ;
	document.getElementById("remaining_guesses").innerHTML =  "Guesses Remaining: " + guessRemain ;
	document.getElementById("solution").innerHTML = (currentWord.join('')).toUpperCase();
}

pickNewWord();

for(var i = 0; i < solution.length; i++)
{
	currentWord[i] = "-";
}

updateScreen();



//document.onkeyup = function(event) {
	//var guess = event.key;
	//for (var i = 0; i < currentWord.length, i++) {

	//}
//}

document.onkeyup = function(event){
	//if(event.which >= 65 && event.which <= 90){
		
		var userguess = event.key;
		var char_position;
		var isGuessInSol = false; 
		var isOldGuess = false;
		/*test keystroke to see if it already was pressed*/
		if(isDone){
			getNewSolution();
			isDone = false;
			
		}
		else{
			for(var i = 0; i < guessedLetters.length; i++){

				if(guessedLetters[i] == userguess){
					isOldGuess= true;
					break;

				}

			}
			if(!isOldGuess){


				for(var i = 0; i < solution.length; i++){
				
					if(solution[i] == userguess)
					{
						isGuessInSol = true;
						currentWord[i] = userguess;
					}
				}

				if(isGuessInSol){
					currentWord[char_position] = userguess;
					
					/*check to see if word is complete*/
					
					if(currentWord.join('') === solution.toString()){
						/*win state*/
						wins++;
						isDone = true;
						document.getElementById("win_counter").innerHTML = "Wins: " + wins;
						document.getElementById("solution").innerHTML = (currentWord.join('')).toUpperCase();
						return;
					}
				}
				else{ 
					
					incorrectGuesses.push(userguess);
					guessRemain--;
					if(guessRemain == 0){
						/*Lose state*/
						
						losses++;
						isDone = true;
						document.getElementById("remaining_guesses").innerHTML =  "Guesses Remaining: " + guessRemain ;
						document.getElementById("loss_counter").innerHTML = "Losses: " + losses;
						return;
					}
					
					
				}
				guessedLetters.push(userguess);
				updateScreen();
					
			}
		}
	}
};