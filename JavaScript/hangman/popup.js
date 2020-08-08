// function win() {
// 	var figureParts = document.getElementsByClassName('figure-part');
    
// }

function gameover() {
    var gameOver = document.getElementById('game-over');
    var playAgain= document.getElementById('game-over-btn');

    if(Array.from(wrongWords).length === figureParts.length) {    //convert set to array

        gameOver.innerHTML = 'Game Over! You Lost!!';
        playAgain.innerHTML = 'Play Again';
		//display msg
        document.body.appendChild(gameOver);
        gameOver.appendChild(playAgain);
        gameOver.style.display = 'block';

        // Reload the browser window on button click
        playAgain.addEventListener('click' , function(){
            window.location.reload();
            gameOver.style.display = 'none';
        });

    } else {
        gameOver.style.display = 'none';
	}
}

function gameWon(rightWords) {
    var gameWon = document.getElementById('game-won');
    var playAgainBtn = document.getElementById('game-over-btn');

    if(rightWords.length === randomWords.length) {
        // console.log('You won!!!');
        gameWon.innerHTML = "Congratulations, you won!!";
        playAgainBtn.innerHTML = 'Play Again';

        document.body.appendChild(gameWon);
        gameWon.appendChild(playAgainBtn);
        gameWon.style.display = 'block';

        // Reload the browser window on button click
        playAgainBtn.addEventListener('click' , function(){
            window.location.reload();
        });
    }
}