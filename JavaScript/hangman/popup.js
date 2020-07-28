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