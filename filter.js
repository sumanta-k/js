console.log("filter method on array");

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = (number) =>{
	return number % 2 ===0;
};
 // console.log(numbers.filter(evenNumbers));
// short version
 const evenAns =numbers.filter((num)=>  num % 2 ===0);
console.log("Even answers are ...");
console.log(evenAns);
// console.log(numbers);
// Use forEach loop
// Initialize with an Empty Array
// Then Traverse that Array through .forEach() method
// put a function inside .forEach() method to check whether the number is even or odd
// in the end if it is then add into ForEachAns's Array ;
 const ForEachAns =[];
 numbers.forEach((num)=>{
  if(num % 2 ===0){
	ForEachAns.push(num);  
}});
console.log(ForEachAns);


const companies = [
	{name : 'Company One', Category :'Finance', start :1981 ,end : 2004},
	{name : 'Company Two', Category :'Auto', start :1992 ,end : 2008},
	{name : 'Company Three', Category :'Retail', start :1989 ,end : 2007},
	{name : 'Company Four', Category :'Technology', start :2009 ,end : 2010},
	{name : 'Company Five', Category :'Finance', start :1987 ,end : 2014},
	{name : 'Company Six', Category :'Auto', start :1986 ,end : 2010},
	{name : 'Company Seven', Category :'Technology', start :2011 ,end : 1996},
	{name : 'Company Eight', Category :'Retail', start :1981 ,end : 2016},
	{name : 'Company Nine', Category :'Finance', start :1981 ,end : 1989}];

  const ansRetail =companies.filter((x)=>
	x.Category === 'Retail'
);
console.log(ansRetail);

  const range = companies.filter((x)=>{
return	x.start >= 1980 &&  x.end <= 2005
});
// Whenever you are putting curly braces make sure
// You are using return keyword 
// otherwise it won't work 

console.log('range between 1980 && 2005');
console.log(range);
// companies those last 10 years or more than than
const longCompany = companies.filter((company) => {
   return company.end - company.start >= 10;
});
console.log("long companies are ....");
console.log(longCompany);
