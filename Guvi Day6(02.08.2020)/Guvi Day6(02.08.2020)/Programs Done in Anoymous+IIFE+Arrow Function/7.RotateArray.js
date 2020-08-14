//Rotate the array by k times as passed in the function;

function rotate(arr1,n){
	
	for(let k=0;k<n;k++){
		let arr2=[];
		arr2[0]=arr1[arr1.length-1];
		for(let i=0;i<arr1.length-1;i++){
			arr2[i+1]=arr1[i];				//arr2= [5,1,2,3,4]
			console.log(arr2);
		}
		arr1=arr2;
	}
	console.log(arr1);
}

let arr=[1,2,3,4,5,6];
console.log(arr);

rotate(arr,3);
