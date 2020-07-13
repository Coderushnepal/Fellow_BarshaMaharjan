
//Q no. 1 solution
function pattern(){
var i, j;
  //outer loop
  for(i=5;i>=1;i--)
   {
   //inner loop
    for(j=1;j<=i;j++)
   {
	console.log('*');
    }
	console.log(' ');
   }
}
pattern();

   // Q no.2 solution
function censor(str) {
	let result = '';
	words = str.split(' ');
	// console.log(words);
	for (i = 0; i < words.length; i++) {
		var len = words[i].length;
		if (len > 4) {
			result = result + '*'.repeat(len) + ' ';
		} else {
			result = result + words[i] + ' ';
		}
	}
	return result;
}
// output of Q no.
console.log(censor ('The code is fourty'));
console.log(censor ('Two plue three is five'));
console.log(censor ('aaaa aaaaa 1234 12345'));
// Q. 3 solution
function toArray(obj) {
	let keys = Object.keys(obj);
	let len = keys.length;
	// console.log(keys);
	let arr = [];
	for (let i = 0; i < len; i++) {
		arr.push([ keys[i], obj[keys[i]] ]);
	}
	return arr;
}
// output of Q no.3
console.log(toArray ({a:1,b:2}));
console.log(toArray ({ shrimp:15,tots:12}));
console.log(toArray({}));

// Q no.4 solution
function identicalFilter(arr) {
	let identical = [];
	let k = 0;
	for (i = 0; i < arr.length; i++) {
		let repeatation = new Set(arr[i]);
		if (repeatation.size === 1) {
			identical[k++] = arr[i];
		}
	}
	return identical;
}
// output of Q no.4
console.log(identicalFilter (["88","999","22","545"]));
console.log(identicalFilter (["xxxxo","oxo","xox"]));

// Q no. 5
function keysAndValues(obj) {
	let keys = Object.keys(obj);
	keys.sort();
	let values = [];
	for (i = 0; i < keys.length; i++) {
		values[i] = obj[keys[i]];
	}
	return [ keys, values ];
}
// output of Q no. 5
console.log(keysAndValues({a:"Apple",b:"Microsoft",c:"Google"}));
console.log(keysAndValues({a:1,b:2,c:3}));
console.log(keysAndValues({key1:true,key2:false,key3:undefined}));


