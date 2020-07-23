function Position(width, height) {
	var width = width;
	var height = height;
	this.create = function() {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
	};
}