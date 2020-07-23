// Q no.1
var listofNames= `Neeta Sapkota
Neha Shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana Kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;

var frn = listofNames.split('\n');
var res = frn.map(function(value, index) {
		var obj = {};
		var names = value.split(" ");
		obj['id'] = index + 1;
		obj['firstName'] = names[0].charAt(0).toUpperCase() + names[0].slice(1);
		obj['lastName'] =names[1].charAt(0).toUpperCase() + names[1].slice(1) ;
		return obj;
	});
console.log(res);

// Q no.2
function find(char) {
    var size = res.filter(function(value) {
        return value.firstName.charAt(0) === char.toUpperCase();
    });

    var same = size.length;
    var different= res.length - same;

    console.log( same + " and " + different );
}
find('s');
find('b');
find('t');

var getArrayFromQ1 = res;
	var dec = getArrayFromQ1.reduce(function(prev, current) {	
		prev[current.id]= current;
		delete current.id;	
		return prev;
	}, {});    
   console.log(dec);



// Q no.4
function longestZero(str) {
	return str.split('1').sort().pop().length;
  }
  
  console.log(longestZero("01100000001011000"));
  console.log(longestZero("100100100"));
  console.log(longestZero("11111"));
  console.log(longestZero(""));

 // Q no.5
  function replaceVowel(str) {
	var strArr = str.split('');
	for (var i = 0; i < str.length; i++) {
	  var char = str[i].toLowerCase();
	  switch(char) {
		case "a":
			strArr[i] = 1;
		  break;
		case "e":
			strArr[i] = 2;
		  break;
		case "i":
			strArr[i] = 3;
		  break;
		case "o":
			strArr[i] = 4;
		  break;
		case "u":
			strArr[i] = 5;
		  break;
		default:
			strArr[i];                                     
	  }                                                    
	                                                       
	}
	return strArr.join('');                                            
  }		                                                   
                                                    
console.log(replaceVowel("coderush"));
console.log(replaceVowel("barsha"));
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));