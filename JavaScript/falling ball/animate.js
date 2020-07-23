function Animate() {
	this.bubbles = [];
	var that = this;
	this.start = function(balls) {
		for(var i = 0; i < balls; i++) {
			var ball = new Ball();
			ball.create(i);
			var place = new Position(window.innerWidth, 0);
			place.create();
			ball.setPosition(place.x, place.y);
			var size = Math.random() * 80;            //ball size//
			ball.setDimensions(size, size);
			this.bubbles.push(ball);
			document.body.appendChild(ball.ball);
			var timeout = Math.random() * 6 * 1000;
			setTimeout(
				(function() {
					var thisBall = ball;
					return function() {
						thisBall.move();
					};
				})(), timeout, );
		}
	};
	this.disappear = function() {
		setInterval(() => {
			this.bubbles.filter(function(item) {
				return !item.clickable;
			}).forEach(function(ball) {
				var pos = ball.getPosition();
				if(pos.y > 1000) {               // displayable screen//
					ball.remove();
				}
			});
		}, 1000 / 60);
	};
}
var animate = new Animate();
animate.start(300);                  //numbers of ball to  be displayed//
animate.disappear();