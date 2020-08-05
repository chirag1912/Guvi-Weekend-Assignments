
  
   var str1=function(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   console.log(sentence.join(" "));
   return sentence;						//so when returning this sentence var it is in array form getting returned in array;
   }
   let str2=str1("Anonymous example to do the sentence title case");
   console.log(str2.join(" "));


//Using IIFE:
  ( function(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   console.log(sentence.join(" "));
   return sentence;
   })("iife example to do the sentence title case");


//Using Arrow: to Be doe using arrow functions only;
//var square = function(number) { return number * number }
//var square = (number) =>number * number

let sentence="Arrow example to do the sentence title case";
var titleCase=(i)=>{
	let i=0; 
	sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
	console.log(sentence.join(" "));
	}
	titleCase(sentence);