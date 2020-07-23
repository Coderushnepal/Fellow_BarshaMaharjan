function Animate() {
	this.bubbles = [];
	var that = this;
	this.start = function(balls) {
		for(var i = 0; i < balls; i++) {
			var ball = new Ball();
			ball.create(i);
			var place = new Position(window.innerWidth - 60, 0);
			place.create();
			ball.setPosition(place.x, place.y);
			var size = Math.random() * 80;            //ball size//
			ball.setDimensions(size, size);
			this.bubbles.push(ball);
			document.body.appendChild(ball.ball);
			var timeout = Math.random() * 5 * 1000;
			setTimeout(
				(function() {
					var thisBall = ball;
					return function() {
						thisBall.move();
					};
				})(), timeout, );
		}
	};
	this.disappearBall = function() {
		setInterval(function() {
			balls.forEach(function(ball) {
				if (ball.getPosition().x > window.innerHeight) {
					ball.remove();
				}
			});
		}, 1000 / 40);
	};
}
var animate = new Animate();
animate.start(300);                  //numbers of ball to  be displayed//
animate.disappearBall();