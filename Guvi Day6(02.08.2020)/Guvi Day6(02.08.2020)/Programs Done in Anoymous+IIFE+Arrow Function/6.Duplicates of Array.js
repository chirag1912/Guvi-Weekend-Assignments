//Remove Duplicate of an array;

let arr=[];	//[2,3,4,5,7,8];

var arrfunc=function(arr){
for(var i in arr){
	//let j=i+1;			//hey error when trying from j=i+1 rather check the condition;
	for(var j in arr){
		//console.log("Array of j is:"+arr[j]);
		if(arr[i]==arr[j] && i!=j){
			//console.log("Elements getting spliced:"+arr[j]);
			arr.splice(j,1);	//j,1 index and no of elements;
		}
	}
}
	return arr;
}
let arrprint=arrfunc([2,3,4,5,2,2,3,5,3,7,8,2,4,6]);
console.log(arrprint);

console.log("EEFI FUNCTION:");
(function(arr){
for(var i in arr){
	//let j=i+1;			//hey error when trying from j=i+1 rather check the condition;
	for(var j in arr){
		//console.log("Array of j is:"+arr[j]);
		if(arr[i]==arr[j] && i!=j){
			//console.log("Elements getting spliced:"+arr[j]);
			arr.splice(j,1);	//j,1 index and no of elements;
		}
	}
}
	console.log(arr);
})([2,3,4,5,7,2,9,7]);