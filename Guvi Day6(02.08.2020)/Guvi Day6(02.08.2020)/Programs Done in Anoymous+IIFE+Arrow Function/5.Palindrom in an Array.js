//Return palindromes in an array;

//var arr=[aba,bab,caac];
let arrmain=[];

var arrstringpali=function(arrmain){
for(var l in arrmain){
let arr=arrmain[l];

let flag=false;
arrsize=arr.length/2;
console.log(arrsize);
let j=0; 
let k=arr.length-1;
for(let i=0;i<=arrsize;i++){	//traversing the elemnt of array
	
	if(arr[j]==arr[k]){
		console.log("Comparing:"+arr[j]+" "+arr[k]);
		j=j+1;
		k=k-1;
		
	}else if(arr[j]!=arr[k]){
		console.log("Not a palindrome");
		break;
	}
	if(j==k || j>k){
		flag =true;
	}
}

if(flag==true){
	console.log("Palindrome");
}	//Complexity: o(n/2);//for palindrome and rest for traversing the array of strings;
}//Main array traversal ends;

}//End of Function;

let arrprint=arrstringpali(["abba","abcdefedcba","abca"]);


//USIN EEFI:
//Return palindromes in an array;

//var arr=[aba,bab,caac];
//let arrmain=[];

console.log("EEFI FUNCTION CALL");

(function(arrmain){
for(var l in arrmain){
let arr=arrmain[l];

let flag=false;
arrsize=arr.length/2;
console.log(arrsize);
let j=0; 
let k=arr.length-1;
for(let i=0;i<=arrsize;i++){	//traversing the elemnt of array
	
	if(arr[j]==arr[k]){
		console.log("Comparing:"+arr[j]+" "+arr[k]);
		j=j+1;
		k=k-1;
		
	}else if(arr[j]!=arr[k]){
		console.log("Not a palindrome");
		break;
	}
	if(j==k || j>k){
		flag =true;
	}
}

if(flag==true){
	console.log("Palindrome");
}	//Complexity: o(n/2);//for palindrome and rest for traversing the array of strings;
}//Main array traversal ends;

})(["abba","abcdefedcba","abca"]);







