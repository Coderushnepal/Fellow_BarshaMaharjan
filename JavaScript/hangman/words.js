var figureParts = document.getElementsByClassName('figure-part');
var guessedWords = new Set();
var wrongWords = new Set();

// Get the entered letters from the keypress event and add to the guessedWords
function matchWord() {
    document.addEventListener ('keypress' , function(event) {
        var enterLetter = event.key;
        // to store the record of entered keys
        guessedWords.add(enterLetter);
        if (randomWords.includes (enterLetter))
        for (var j=0; j < randomWords.length; j++) {
            if (enterLetter == randomWords[j]) {
                displayRightGuess(enterLetter , j);
                // console.log(enterLetter);
            } 
        }
            else {
                wrongWords.add(enterLetter);
            displayWrongGuess(wrongWords);
        } 
    })
}
matchWord();

// Displayes the matched letters 
function displayRightGuess(value, index) {
    const letterContainer = document.getElementById('dashed-container').children[index];
	letterContainer.innerHTML = value;
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

