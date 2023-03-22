// first write a javascript function then use a condition that must be met.
//if number is equal to 0.
function factorial(num) {
	if (num === 0){
		return 1;
	}
 
		return num * factorial(num-1);
}
console.log(factorial(5));
console.log(factorial(10)); 
 


  
