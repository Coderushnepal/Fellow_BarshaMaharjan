
var words = [
    "Thabe",
    "Maharjan",
    "Bista",
    "Siwakoti",
    "Karanjit",
    "Sharma",
    "Thapa",
    "Khatiwada",
    "Thulung",
    "Code",
    "Rush",
    "Fellowship",
    "Subedi",
    "Baral",
    "Kafle",
    ];
  
    //random word generation
   var randomWords = words[Math.floor(Math.random()*words.length)].toLowerCase();
    console.log(randomWords);

var letter = function() {
  for (var j=0; j < randomWords.length; j++) {
    var newDash = document.createElement('div');
    newDash.classList.add('dashed');
    var divisions = document.getElementById('dashed-container');
        divisions.appendChild(newDash);
  }
}
letter();
