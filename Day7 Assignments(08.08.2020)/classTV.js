class TV{
	constructor(_brand){
		this.brand=_brand;
		this.channel=1;
		this.prize=25000;
		this.inches=40;
		this.OnOff="ON";
		this.volume=50;
		this.chanbefore=0;
	}

	setvolume(vol){
		if(vol>=0 && vol<=100){this.volume=vol;}
	}

	setchannel(chan){
		if(chan>50 && chan<1){
			return this.chanbefore;
		}else if(chan<50 && chan>0){
			this.channel=chan;
			this.chanbefore=chan;
		}
	}

	reset(abc){
		obj1(abc);
	}
	status(){
		console.log(this.brand+" at channel "+this.channel+", volume "+this.volume);
	}

}

let obj1= new TV("Hitachi");
obj1.setvolume(20);
obj1.setchannel(40); 
obj1.setchannel(60);
obj1.reset("Hitachi");
console.log("After Reset:"+obj1);
obj1.status();
