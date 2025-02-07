console.log("For of Loop");
const arr = ['happy',23,'bleach'];
// [] Traverse an Array (simple for loop)
console.log("logging out Through Simple for Loop");
for(let i = 0; i< arr.length; i++){
	console.log(arr[i]);
};

// [] Traverse an Array (For Of Loop)
console.log("logging out Through For Of Loop");
for (let item of arr){
	console.log(item);
};


// [] Traverse a String (Simple for Loop)
let name = 'Aditya singh !';
console.log("Traversing Through a String via simple for loop");
for (let i = 0; i< name.length; i++){
	console.log(name.charAt(i));
};
// [] Traverse a String (For Of Loop)
let naam = 'Happy sippo';
for (let character of naam){
	console.log(character);
};



// [] Traverse an Object of Array (For Of Loop)
let obj = [{name :'happy', age : 22},
	   {name :'abinash', age : 23},
	  {name : 'aditya', age: 22}]; 
for (let item of obj){
//	console.log(item);
	console.log(item.name);
};

// [] Traverse an Object of Array (Simple For Loop)
	for(let i = 0; i < obj.length; i++){
		console.log(obj[i].age);
};

// [] Traverse an Map (For Of Loop)
let newMap = new Map();
newMap.set('happy',22);
newMap.set('aditya',23);

for(let item of newMap){
	console.log(item);
};
// Accessing only [ key && value ]
console.log(`Accessing key && value of newMap`);
 for (let [key,value] of newMap){
	console.log(key,value);
};
// [] Traverse an Map (Simple For Loop)

// I haven't found how to access map through simple for loop
// so ignore the code below this
/*  console.log("Accessing map object Through Simple For Loop");
for (let i = 0; i< newMap.length; i++){
	console.log(newMap.get(key));
};

*/
