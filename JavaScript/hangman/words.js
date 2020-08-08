var figureParts = document.getElementsByClassName('figure-part');
var guessedWords = new Set();
var wrongWords = new Set();
var rightWords = [];

// Get the entered letters from the keypress event and add to the guessedWords
function matchWord() {
    document.addEventListener ('keypress' , function(event) {
        
        var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);
        // to store the record of entered keys
        if( Array.from(guessedWords).includes(event.key)) {
            
            console.log(alreadyGuessed);
            alreadyGuessed.style.display = 'block';
            alreadyGuessed.innerHTML = event.key +" has already been guessed";
            
        } else {
            alreadyGuessed.style.display = 'none';
            guessedWords.add(event.key);
        if (randomWords.includes (event.key))
        for (var j=0; j < randomWords.length; j++) {
            if (event.key == randomWords[j]) {
                displayRightGuess(event.key , j);
                
            } 
        }
            else {
                wrongWords.add(event.key);
            displayWrongGuess(wrongWords);
        } 
    }
    });
}
matchWord();

// Displayes the matched letters 
function displayRightGuess(value, index) {
    rightWords.push(value);
    const letterContainer = document.getElementById('dashed-container').children[index];
    letterContainer.innerHTML = value;
    gameWon(rightWords);
}

//hiding each body parts
window.onload = function() {
   Array.from(figureParts).forEach((value) => {
        value.style.visibility = 'hidden';
   });
};
function displayWrongGuess(wrongWords) {
    var wrongLetter = document.getElementById('wrong-letter');
    wrongLetter.innerHTML = "Wrong Guess" +' :'+ Array.from(wrongWords).join(',');   //convert set to array
    document.body.appendChild(wrongLetter);

    displayFigureParts();
    gameover();
  
}
var n = 0;
function displayFigureParts() {
    figureParts[n].style.visibility = 'visible';
    n++;
}

