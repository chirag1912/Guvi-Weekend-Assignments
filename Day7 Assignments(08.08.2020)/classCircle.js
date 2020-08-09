class Circle{
	constructor(r1,c1){
		this.radius=r1;
		this.color=c1;
		console.log(this.radius+" "+this.color);
	}
	
	getColor(){
		if(this.color!=undefined){ return this.color;}
	}
	getRadius(){
		if(this.radius!=undefined){return this.radius;}
	}	
	setColor(col1){
		this.color=col1;
	}
	setRadius(rad1){
		this.radius=rad1;
	}
	getArea(){
		const pi=3.17;
		return pi*Math.pow(this.radius,2);
	}
}

let obj=new Circle();
let obj1=new Circle(20);
let obj2=new Circle(20,"red");

obj.setRadius(25);
obj.setColor("Green");
console.log("Radius:"+obj.getRadius());
console.log("Color:"+obj.getColor());
console.log("Area:"+obj.getArea());
