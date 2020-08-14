
var s= function (a,b,c){
console.log(a);
console.log(b);
console.log(c);
}

function dd(a){
   a(10,20,30);
 /*return function ee(){console.log("hello there!");}
	//Hey can return a function as well;
		Not just array or number from a fuction;
	That function execution wil be return value;
OR: */
	let rr=()=>console.log("Hey There!");
	//OR let rr= function(){console.log("Hi");}	
		
		return rr;	//This return has to be of the main function; We are returning the function here;

		
}

/*var tt=dd(s);	
tt();	//Since it is fuction we are getting in return;
	//We just have to call that function;
	//Calling the function will be done using the var we stored th eret value;
	// and using () for return value;
	//Hey, so on getting function from return it becomes object of the function;

Now, the function return can be called by calling the function;
Not directly;

MOST IMP:
Since rr is a function itself, we assigning function to a var;
So, to call return of this function;
Call the var where function is stored;
var()	//To call the function;
Calling of function is needed here;*/

var tt=dd(s);	//Anything returned from dd will be assigned to tt var; Now sice the return of rr is a function here;
tt(); //tt wil be an object of rr function, to execute this function tt();//call tt();


Also, can pass:
var to s function();
function dd(a,c,d,f){
	a(c,d,f);

}

var tt=(s,10,20,30);