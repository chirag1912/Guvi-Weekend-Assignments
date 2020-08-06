//Return all the prime numbers in an array
let arr=[];
let arrprime=function(arr){
	arrnum=[];
	for(let i=0; i<arr.length;i++){

		let count=0;
		let midnum=arr[i]/2;
		for(let j=2;j<midnum;j++){
			if(arr[i]%j==0){
				count=count+1;
				if(count==1){
				break;
				}
			}
		}
		if(count==0){
			arrnum=arrnum+arr[i]+",";
		}
	}
	console.log(arrnum);
	return arrnum;
}
arrprint=arrprime([2,29,31,47,33,46,77,111]);
console.log(arrprint);

//IIFE:
(function(arr){
	arrnum=[];
	for(let i=0; i<arr.length;i++){

		let count=0;
		let midnum=arr[i]/2;
		for(let j=2;j<midnum;j++){
			if(arr[i]%j==0){
				count=count+1;
				if(count==1){
				break;
				}
			}
		}
		if(count==0){
			arrnum=arrnum+arr[i]+",";
		}
	}
	console.log(arrnum);
	return arrnum;
})([2,31,43,47,297,345,25]);


