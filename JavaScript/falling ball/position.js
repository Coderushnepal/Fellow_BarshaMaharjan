function Position(width, height) {
	var width = width;
	var height = height;
	var that = this;
	this.create = function() {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
	};
}