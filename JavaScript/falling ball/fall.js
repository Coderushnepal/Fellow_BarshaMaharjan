color = ["red", "lawnGreen", "blue", "chocolate", "gold", "silver", "violet"];

function Ball(i) {
	var ball = null;
	var id = i;
	this.intervalId = null;
	var that = this;
	this.clickable = false;
	this.clickable = false;
	this.create = function(i) {
		this.ball = document.createElement("div");
		this.ball.id = i;
		var ballColor = (color[parseInt(Math.random() * color.length)]);    //setting colors to ball//
		this.ball.style.backgroundColor = ballColor;
		this.ball.style.position = "absolute";
		this.ball.style.borderRadius = "50%";
		this.ball.addEventListener("click", function() {     //adding click event//
			if(that.clickable) {
				that.remove();
			}
		});
	};
	this.remove = function() {
		document.body.removeChild(that.ball);
		clearInterval(that.intervalId);
		that.clickable = true;
	};
	this.setDimensions = function(w, h) {        //assigning width and height of ball//
		this.ball.style.width = w + "px";
		this.ball.style.height = h + "px";
	};
	this.setPosition = function(x, y) {          // coordinat-placing at initial phase on top(y-axis)//
		this.ball.style.left = x + "px";
		this.ball.style.top = y + "px";
	};
	this.getPosition = function() {              //directing ball to its position x-axis(left) y axis (top)//
		return {
			x: parseInt(this.ball.style.left),
			y: parseInt(this.ball.style.top),
		};
	};
	this.move = function() {                          //ball falls //
		this.clickable = true;
		var movement = Math.ceil(Math.random() * 10);         //ceil -round-off to nearest value eg:1.2=2//
		this.intervalId = setInterval(function() {
			var currentTop = that.ball.style.top;
			var nextTop = parseInt(currentTop) + movement;
			that.ball.style.top = nextTop + "px";
		}, 1000 / 60);
	};
}