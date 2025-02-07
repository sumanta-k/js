console.log("For In Loop");
const colorObj = { color1 :'red',
		   color2 :'blue',
		   color3 : 'orange',
		   color4 : 'green'
		};

for(let key in colorObj){
	console.log(key);
	// Gives only key
	console.log(colorObj[key]);

};

console.log(`In Array ....`);
const colorArr = ['red','green','blue','yellow'];
for(const key in colorArr){
	console.log(key);
	console.log(colorArr[key]);
};

