//Print Odd numbers in an array:

let arr=[1,2,3,4,5,6,7,8,9];
let a=[];						//Hey need to declare a as an empty array here;	an int or not initialising will give a.push not available;

let f1=function(arr){

	for(let i=0;i<arr.length;i++){
		if(arr[i]%2!=0){
			a.push(arr[i]);
		}
	}
	return a;
}

a=f1(arr);
console.log(a);


arr=[1,2,3,4,5,6,7,8,9];			
a=[];

(function () {
    for(let i=0;i<arr.length;i++){
		if(arr[i]%2!=0){
			a.push(arr[i]);
		}

	}
	console.log(count);
	console.log(a);					
})();							//() makes it self executing;



