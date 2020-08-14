//Calculator Class:

class Calculator{

	constructor(){
		this.num1;
		this.num2;
	}

	add(_num1,_num2){
		this.num1=_num1;
		this.num2=_num2;
		return this.num1+this.num2;
	}
	sub(_num1,_num2){
		this.num1=_num1;
		this.num2=_num2;
		return this.num1-this.num2;
	}
	mul(_num1,_num2){
		this.num1=_num1;
		this.num2=_num2;
		return this.num1*this.num2;
	}
}

let c=new Calculator();
console.log(c.add(1,2));
console.log(c.sub(5,4));
console.log(c.mul(3,4))