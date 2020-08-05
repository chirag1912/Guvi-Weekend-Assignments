//Sum of all numbers in an array

let arr=[];		//Need not define arr even when passing in the function complier understands var is pased of type array;
let arrsum=function(arr){
	console.log(arr);
	let sum=0;
								//if using of just use i//indexing it will use the value of that index;
	for(var i of arr){
		sum=sum+i;
	}
	console.log(sum);
	return sum;
}

let printsum=arrsum([1,2,3,4,5,6]);
console.log(printsum);



//IIFE:
(function(arr){
	console.log(arr);
	let sum=0;
								//if using of just use i//indexing it will use the value of that index;
	for(var i of arr){
		sum=sum+i;
	}
	console.log(sum);
	//return sum;
})([2,3,4,5,6,7])

/*let printsum=arrsum([1,2,3,4,5,6]);
console.log(printsum);
*/


