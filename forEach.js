
console.log(`for each loop ....`); 
const array1 = ['a','b','c'];
// it is a `property`  of [array]

array1.forEach((ele) =>{
	console.log(ele);
});

const socials = ['Twitter','LinkedIn','Facebook','Instagram'];
socials.forEach((item,arr_index,arr) =>{
	console.log(`${arr_index} - ${item} array is [${arr}]`);
});


// Instead of passing anonymous function 
// let's send some actual function

 const logSocial = (item) =>{
	console.log(item);
};

socials.forEach(logSocial);


// Create a Object for social inside array
const socialObjs = [
  {name : 'Twitter', url : 'https://twitter.com'}, 
  {name : 'Facebook', url : 'https://facebook.com'}, 
  {name : 'LinkedIn', url : 'https://https://linkedin.com'}, 
  {name : 'Instagram', url : 'https://instagram.com'}]; 

// now log each item
socialObjs.forEach((item) => {
	// console.log(item);
	console.log(item.url);
});
